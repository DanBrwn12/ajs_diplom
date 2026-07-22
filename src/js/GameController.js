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

  onCellClick(index) {
    const positionedChar = this.characterPossitionList.find(p => p.position === index);
    
    if (!positionedChar) {
      GamePlay.showError('Выберите персонажа');
      return;
    } 
    
    const character = positionedChar.character;

    if (this.enemyCharactersType.includes(character.type)) {
      GamePlay.showError('Вы не можете ходить персонажем соперника');
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
        this.gamePlay.setCursor(this.playerCharacrersType.includes(character.type) ? this.cursor.poinder : this.cursor.crosshair);
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
}
