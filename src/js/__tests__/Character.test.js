import Character from "../characters/Character"
import Bowman from "../characters/Bowman";
import Daemon from "../characters/Daemon";
import Magician from "../characters/Magician";
import Swordsman from "../characters/Swordsman";
import Undead from "../characters/Undead";
import Vampire from "../characters/Vampire";

describe ('Character', () => {
    let bowman, daemon, magician, swordsman, undead, vampire;

    beforeEach (() => {
        bowman = new Bowman(1);
        daemon = new Daemon(1);
        magician = new Magician(1);
        swordsman = new Swordsman(1);
        undead = new Undead(1);
        vampire = new Vampire(1);

    });

    test('Выбрасывает исключение при создании объекта класса Character', () => {
        expect(() => new Character(3)).toThrow('Нельзя создать объект класса Character')
    });

    test ('Создает объекты унаследованных классов', () => {

        const characterList = [bowman, daemon, magician, swordsman, undead, vampire];
        characterList.forEach(char => {
            expect(char.level).toBe(1)
        })
    });

    test('Проверяет правильные значения attack и defence у объекта Bowman', () => {
        expect(bowman.type).toBe('bowman');
        expect(bowman.attack).toBe(25);
        expect(bowman.defence).toBe(25)
    });

    test('Проверяет правильные значения attack и defence у объекта Swordsman', () => {
        expect(swordsman.type).toBe('swordsman');
        expect(swordsman.attack).toBe(40);
        expect(swordsman.defence).toBe(10)
    });
    
    test('Проверяет правильные значения attack и defence у объекта Magician', () => {
        expect(magician.type).toBe('magician');
        expect(magician.attack).toBe(10);
        expect(magician.defence).toBe(40)
    });

    test('Проверяет правильные значения attack и defence у объекта Vampire', () => {
        expect(vampire.type).toBe('vampire');
        expect(vampire.attack).toBe(25);
        expect(vampire.defence).toBe(25)
    });

    test('Проверяет правильные значения attack и defence у объекта Undead', () => {
        expect(undead.type).toBe('undead');
        expect(undead.attack).toBe(40);
        expect(undead.defence).toBe(10)
    });

    test('Проверяет правильные значения attack и defence у объекта Daemon', () => {
        expect(daemon.type).toBe('daemon');
        expect(daemon.attack).toBe(10);
        expect(daemon.defence).toBe(10)
    })

})