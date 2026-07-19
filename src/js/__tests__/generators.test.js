import { characterGenerator } from "../generators";
import { generateTeam } from "../generators";
import Bowman from "../characters/Bowman";
import Magician from "../characters/Magician";

describe('generators', () => {
    const allowedTypes = [Bowman, Magician];

    test('Проверка выдает ли characterGenerator бесконечное количество новыъ персонажей из allowedTypes', () => {
        const character = characterGenerator(allowedTypes, 5);

        for (let i = 0; i < 20; i++) {
            const char = character.next().value;

            const isAllowedType = allowedTypes.some(Type => char instanceof Type);
            expect(isAllowedType).toBe(true);
            
            expect(character.next().done).toBe(false)
            
        }
    });

    test('Проверяет, что generateTeam создает персонажей в нужном количестве и диапазоне уровней', () => {
        const team = generateTeam(allowedTypes, 5, 3);
        team.characters.forEach(character => {
            expect(character.level).toBeGreaterThanOrEqual(1);
            expect(character.level).toBeLessThanOrEqual(5)
        });

        expect(team.characters.length).toBe(3)
    })
})