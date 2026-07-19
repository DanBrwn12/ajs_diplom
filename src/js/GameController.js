import { generateTeam } from './generators';
import PositionedCharacter from './PositionedCharacter';
import themes from './themes';
import Bowman from './characters/Bowman';
import Magician from './characters/Magician';
import Swordsman from './characters/Swordsman';
import Daemon from './characters/Daemon';
import Undead from './characters/Undead';
import Vampire from './characters/Vampire';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
  }

  init() {
    this.gamePlay.drawUi(themes.prairie);
    // TODO: load saved stated from stateService
  
    const playerTeam = generateTeam([Bowman, Magician, Swordsman], 5, 4);
    const enemyTeam = generateTeam([Daemon, Undead, Vampire], 5, 4);

    let characterPossitionList = [];

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
      characterPossitionList.push(new PositionedCharacter(character, position))
      
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
      characterPossitionList.push(new PositionedCharacter(character, position))
      
    }

    console.log(characterPossitionList);

    this.gamePlay.redrawPositions(characterPossitionList)
  }

  onCellClick(index) {
    // TODO: react to click
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}
