import GameController from '../GameController';
import GamePlay from '../GamePlay';
import GameStateService from '../GameStateService';

function createMockGamePlay() {
  const gamePlay = new GamePlay();
  gamePlay.drawUi = () => {};
  gamePlay.redrawPositions = () => {};
  gamePlay.setCursor = () => {};
  gamePlay.selectCell = () => {};
  gamePlay.deselectCell = () => {};
  gamePlay.hideCellTooltip = () => {};
  gamePlay.showCellTooltip = () => {};
  gamePlay.addCellEnterListener = () => {};
  gamePlay.addCellLeaveListener = () => {};
  gamePlay.addCellClickListener = () => {};
  gamePlay.addNewGameListener = () => {};
  return gamePlay;
}

describe('GameStateService', () => {
  test('сохранение состояния', () => {
    const stateService = new GameStateService({
      getItem: () => null,
      setItem: jest.fn(),
    });
    const gamePlay = createMockGamePlay();
    const controller = new GameController(gamePlay, stateService);

    controller.currentTheme = 'arctic';
    controller.state.maxScore = 1000;
    controller.characterPossitionList = [];

    controller.saveState();

    expect(stateService.storage.setItem).toHaveBeenCalledWith(
      'state',
      expect.stringContaining('arctic')
    );
  });

  test('успешная загрузка сохранения', () => {
    const savedState = {
      currentTurn: 'player',
      currentTheme: 'desert',
      maxScore: 500,
      characterPositions: [],
      selectedCell: null,
    };

    const stateService = new GameStateService({
      getItem: () => JSON.stringify(savedState),
      setItem: () => {},
    });
    const gamePlay = createMockGamePlay();
    const showErrorSpy = jest.spyOn(GamePlay, 'showError').mockImplementation(() => {});
    const controller = new GameController(gamePlay, stateService);

    const result = controller.loadState();

    expect(result).toBe(true);
    expect(controller.currentTheme).toBe('desert');
    expect(controller.state.maxScore).toBe(500);

    showErrorSpy.mockRestore();
  });

  test('неуспешная загрузка сохранения', () => {
    const stateService = new GameStateService({
      getItem: () => { throw new Error('Invalid state'); },
      setItem: () => {},
    });
    const gamePlay = createMockGamePlay();
    const showErrorSpy = jest.spyOn(GamePlay, 'showError').mockImplementation(() => {});
    const controller = new GameController(gamePlay, stateService);

    const result = controller.loadState();

    expect(result).toBe(false);
    expect(showErrorSpy).toHaveBeenCalledWith('Не удалось загрузить сохранение');

    showErrorSpy.mockRestore();
  });
});