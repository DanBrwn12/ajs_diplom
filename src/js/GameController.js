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

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.characterPossitionList = [];
    this.selectedCell = null;
    this.state = new GameState()
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
    this.gamePlay.addCellClickListener(this.onCellClick.bind(this))
  }

  onCellClick(index) {
    const positionedChar = this.characterPossitionList.find(p => p.position === index);
    const playerCharacters = ['bowman', 'magician', 'swordsman'];
    const enemyCharacters = ['daemon', 'undead', 'vampire'];
    
    if (!positionedChar) {
      GamePlay.showError('Выберите персонажа');
      return;
    } 
    
    const character = positionedChar.character;

    if (enemyCharacters.includes(character.type)) {
      GamePlay.showError('Вы не можете ходить персонажем соперника');
    } else if (playerCharacters.includes(character.type)) {
      console.log(index, this.selectedCell)
      
      if (this.selectedCell !== null) {
        console.log('selectedCell не null')
        if (this.selectedCell !== index) {
          console.log('selectedCell !== index')
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
    if (positionedChar) {
      const character = positionedChar.character;
      this.gamePlay.showCellTooltip(GameController.getCharacterInfo(character), index);
    }
  }

  static getCharacterInfo(character) {
    return `\u{1F396} ${character.level} \u{2694} ${character.attack} \u{1F6E1} ${character.defence} \u{2764} ${character.health}`
  }

  onCellLeave(index) {
    this.gamePlay.hideCellTooltip(index)
  }
}
