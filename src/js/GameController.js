import { generateTeam } from './generators';
import PositionedCharacter from './PositionedCharacter';
import themes from './themes';
import Bowman from './characters/Bowman';
import Magician from './characters/Magician';
import Swordsman from './characters/Swordsman';
import Daemon from './characters/Daemon';
import Undead from './characters/Undead';
import Vampire from './characters/Vampire';
import GamePlay from './GamePlay';
import GameState from './GameState';
import cursors from './cursors';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.characterPossitionList = [];
    this.selectedCell = null;
    this.state = new GameState();
    this.cursor = cursors;
    this.playerCharacrersType = ['bowman', 'magician', 'swordsman'];
    this.enemyCharactersType = ['daemon', 'undead', 'vampire'];
  }

  init() {
    this.gamePlay.drawUi(themes.prairie);
    // TODO: load saved stated from stateService
    
    const playerTeam = generateTeam([Bowman, Magician, Swordsman], 5, 4);
    const enemyTeam = generateTeam([Daemon, Undead, Vampire], 5, 4);

    let setPositions = new Set();

    for (let index = 0; index < playerTeam.characters.length; index++) {
      const character = playerTeam.characters[index];
      
      let position;
      do {
        const randomRow = Math.floor(Math.random() * this.gamePlay.boardSize);
        const randomColumn = Math.floor(Math.random() * 2);
        position = randomRow * this.gamePlay.boardSize + randomColumn;
      } while (setPositions.has(position));

      setPositions.add(position);
      this.characterPossitionList.push(new PositionedCharacter(character, position))
      
    }

    for (let index = 0; index < enemyTeam.characters.length; index++) {
      const character = enemyTeam.characters[index];
      
      let position; 
      do {
        const randomRow = Math.floor(Math.random() * this.gamePlay.boardSize);
        const randomColumn = 6 + Math.floor(Math.random() * 2);
        position = randomRow * this.gamePlay.boardSize + randomColumn;
      } while (setPositions.has(position));

      setPositions.add(position);
      this.characterPossitionList.push(new PositionedCharacter(character, position))
      
    }

    this.gamePlay.redrawPositions(this.characterPossitionList);

    this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this));
    this.gamePlay.addCellLeaveListener(this.onCellLeave.bind(this));
    this.gamePlay.addCellClickListener(this.onCellClick.bind(this));
  }

  async onCellClick(index) {
    const positionedChar = this.characterPossitionList.find(p => p.position === index);
    
    if (positionedChar) {
      const character = positionedChar.character;

      if (this.enemyCharactersType.includes(character.type)) {
        if (this.selectedCell === null) {
          GamePlay.showError('Вы не можете ходить персонажем соперника');
          return;
        }
        const attacker = this.getSelectedCharacter();
        const distance = this.getDistance(this.selectedCell, index);
        
        if (distance > attacker.attackDistance) {
          GamePlay.showError('Слишком далеко');
          return;
        }
  
        const damage = Math.max(attacker.attack - character.defence, attacker.attack * 0.1);
  
        character.health -= damage;
  
        await this.gamePlay.showDamage(index, damage);
        
        if (character.health <= 0) {
          this.characterPossitionList = this.characterPossitionList.filter(p => p.position !== index);
        }
        
        this.gamePlay.deselectCell(this.selectedCell);
        this.gamePlay.deselectCell(index);
        this.selectedCell = null;
        this.gamePlay.redrawPositions(this.characterPossitionList);
        this.gamePlay.setCursor(this.cursor.auto);
        this.state.currentTurn = 'enemy';
        await this.computerTurn();
      } else if (this.playerCharacrersType.includes(character.type)) {
        if (this.selectedCell !== null) {
          if (this.selectedCell !== index) {
            this.gamePlay.deselectCell(this.selectedCell);
            this.gamePlay.selectCell(index);
            this.selectedCell = index;
          } else {
            this.gamePlay.deselectCell(index);
            this.selectedCell = null;
          }
        } else {
          this.gamePlay.selectCell(index);
          this.selectedCell = index;
        }
      }     
    } else {
      if (this.selectedCell !== null) {
        const movingChar = this.characterPossitionList.find(p => p.position === this.selectedCell);
        const distance = this.getDistance(this.selectedCell, index);

        if(distance > movingChar.character.moveDistance) {
          GamePlay.showError('Слишком далеко');
          return;
        }

        movingChar.position = index;
        this.gamePlay.deselectCell(this.selectedCell);
        this.gamePlay.deselectCell(index);
        this.selectedCell = null;
        this.gamePlay.redrawPositions(this.characterPossitionList);
        this.gamePlay.setCursor(this.cursor.auto);
        this.state.currentTurn = 'enemy';
        await this.computerTurn()

      } else {
        GamePlay.showError('Выберите персонажа');
      }
    }
  }

  onCellEnter(index) {
    const positionedChar = this.characterPossitionList.find(p => p.position === index);

    if (this.selectedCell !== null) {
      const selectedChar = this.getSelectedCharacter();
      const distance = this.getDistance(this.selectedCell, index);

      if (positionedChar) {
        const character = positionedChar.character;
        this.gamePlay.showCellTooltip(GameController.getCharacterInfo(character), index);

        if (this.playerCharacrersType.includes(character.type)) {
          this.gamePlay.setCursor(this.cursor.pointer);
        } else if (this.enemyCharactersType.includes(character.type) && distance <= selectedChar.attackDistance) {
          this.gamePlay.setCursor(this.cursor.crosshair);
          this.gamePlay.selectCell(index, 'red');
        } else {
          this.gamePlay.setCursor(this.cursor.notallowed);
        }
      } else {
        if (distance <= selectedChar.moveDistance) {
          this.gamePlay.setCursor(this.cursor.pointer);
          this.gamePlay.selectCell(index, 'green');
        } else {
          this.gamePlay.setCursor(this.cursor.notallowed);
        }
      }
    } else {
      if (positionedChar) {
        const character = positionedChar.character;
        this.gamePlay.showCellTooltip(GameController.getCharacterInfo(character), index);
        this.gamePlay.setCursor(this.playerCharacrersType.includes(character.type) ? this.cursor.pointer : this.cursor.notallowed);
      } else {
        this.gamePlay.setCursor(this.cursor.auto);
      }
    }
  }

  getDistance(fromIndex, toIndex) {
    const rowCharacter = Math.floor(fromIndex / this.gamePlay.boardSize);
    const columnCharacter = fromIndex % this.gamePlay.boardSize
        
    const rowPoint = Math.floor(toIndex / this.gamePlay.boardSize);
    const columnPoint = toIndex % this.gamePlay.boardSize;

    const rowDiff = Math.abs(rowCharacter - rowPoint);
    const columnDiff = Math.abs(columnCharacter - columnPoint);
    
    return Math.max(rowDiff, columnDiff);
  }

  getSelectedCharacter() {
    const positionCharacter = this.characterPossitionList.find(p => p.position === this.selectedCell);
    if (positionCharacter) {
      return positionCharacter.character;
    } else {
      return null;
    }
  }

  static getCharacterInfo(character) {
    return `\u{1F396} ${character.level} \u{2694} ${character.attack} \u{1F6E1} ${character.defence} \u{2764} ${character.health}`
  }

  onCellLeave(index) {
    this.gamePlay.hideCellTooltip(index);
    this.gamePlay.deselectCell(index)
  }

  async computerTurn() {
    const enemies = this.characterPossitionList.filter(p => this.enemyCharactersType.includes(p.character.type));
    const players = this.characterPossitionList.filter(p => this.playerCharacrersType.includes(p.character.type));

    if (players.length === 0) return;

    for (const enemy of enemies) {
      const target = this.findBestTarget(enemy, players);
      if (target) {
        await this.performAttack(enemy, target);
        return;
      }
    }

    const randomEnemy = enemies[Math.floor(Math.random() * enemies.length)];
    this.moveRandomly(randomEnemy);
    this.state.currentTurn = 'player';
  }

  findBestTarget(enemy, players) {
    let bestTarget = null;
    let lowestHealth = Infinity;

    for (const player of players) {
      const distance = this.getDistance(enemy.position, player.position);
      if (distance <= enemy.character.attackDistance && player.character.health < lowestHealth) {
        lowestHealth = player.character.health;
        bestTarget = player;
      }
    }
    return bestTarget;
  }

  async performAttack(attacker, target) {
    const damage = Math.max(
      attacker.character.attack - target.character.defence,
      attacker.character.attack * 0.1
    );

    target.character.health -= damage;

    await this.gamePlay.showDamage(target.position, damage);

    if (target.character.health <= 0) {
      this.characterPossitionList = this.characterPossitionList.filter(p => p.position !== target.position);
    }

    this.gamePlay.redrawPositions(this.characterPossitionList);
    this.state.currentTurn = 'player';
  }

  moveRandomly(enemy) {
    const players = this.characterPossitionList.filter(p => this.playerCharacrersType.includes(p.character.type));

    if (players.length === 0) return;

    let closestPlayer = players[0];
    let closestDistance = this.getDistance(enemy.position,closestPlayer.position);

    for (const player of players) {
      const dist = this.getDistance(enemy.position, player.position);
      if (dist < closestDistance) {
        closestDistance = dist;
        closestPlayer = player;
      }
    }

    const possibleMoves = [];
    for (let i = 0; i < this.gamePlay.boardSize ** 2; i++) {
      const isOccupied = this.characterPossitionList.some(p => p.position === i);
      if (!isOccupied) {
        const dist = this.getDistance(enemy.position, i);
        if(dist <= enemy.character.moveDistance) {
          possibleMoves.push(i);
        }
      }
    }

    let bestMove = null;
    let bestNewDistance = Infinity;

    for (const move of possibleMoves) {
      const newDist = this.getDistance(move, closestPlayer.position);
      if (newDist < bestNewDistance) {
        bestNewDistance = newDist;
        bestMove = move;
      }
    }

    if (bestMove != null) {
      enemy.position = bestMove;
      this.gamePlay.redrawPositions(this.characterPossitionList);
    }
  }
}
