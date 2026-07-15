import { calcTileType } from "../utils";

describe('calcTileType', () => {
    test('Возвращает top-left при передаче индекса 0', () => {
        expect(calcTileType(0, 8)).toBe('top-left')
    });

    test('Возвращает top-right при передаче индекса 7', () => {
        expect(calcTileType(7, 8)).toBe('top-right')
    });

    test('Возвращает top при передаче индекса 5', () => {
        expect(calcTileType(5, 8)).toBe('top')
    });

    test('Возвращает bottom-left при передаче индекса 56', () => {
        expect(calcTileType(56, 8)).toBe('bottom-left')
    });

    test('Возвращает bottom-right при передаче индекса 63', () => {
        expect(calcTileType(63, 8)).toBe('bottom-right')
    });

    test('Возвращает bottom при передаче индекса 60', () => {
        expect(calcTileType(60, 8)).toBe('bottom')
    });

    test('Возвращает left при передаче индекса 16', () => {
        expect(calcTileType(16, 8)).toBe('left')
    });

    test('Возвращает right при передаче индекса 23', () => {
        expect(calcTileType(23, 8)).toBe('right')
    });

    test('Возвращает center при передаче 30', () => {
        expect(calcTileType(30, 8)).toBe('center')
    })
})