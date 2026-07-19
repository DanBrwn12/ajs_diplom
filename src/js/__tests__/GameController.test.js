import Bowman from "../characters/Bowman";
import GameController from "../GameController";

describe('GameController', () => {
    test('Проверяет созданный метод на корректность вывода характеристик', () => {
        const bowman = new Bowman(3);
        
        expect(GameController.getCharacterInfo(bowman)).toBe('\u{1F396} 3 \u{2694} 25 \u{1F6E1} 25 \u{2764} 100')

        
    })
})