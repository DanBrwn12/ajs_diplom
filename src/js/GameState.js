export default class GameState {
  constructor() {
    this.currentTurn = 'player';
    this.currentTheme = 'prairie';
    this.maxScore = 0;
    this.characterPositions = [];
    this.selectedCell = null;
  }
  
  static from(object) {
    const state = new GameState();
    state.currentTurn = object.currentTurn;
    state.currentTheme = object.currentTheme;
    state.maxScore = object.maxScore;
    state.characterPositions = object.characterPositions;
    state.selectedCell = object.selectedCell;
    return state;
  }
}
