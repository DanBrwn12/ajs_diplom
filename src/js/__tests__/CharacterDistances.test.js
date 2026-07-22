import Bowman from "../characters/Bowman";
import Swordsman from "../characters/Swordsman";
import Magician from "../characters/Magician";
import Daemon from "../characters/Daemon";
import Undead from "../characters/Undead";
import Vampire from "../characters/Vampire";

describe('Проврека moveDistance и attackDistance персонажей', () => {
    let bownam, swordsman, magician, daemon, undead, vampire;

    beforeEach(() => {
        bownam = new Bowman(1);
        swordsman = new Swordsman(1);
        magician = new Magician(1);
        daemon = new Daemon(1);
        undead = new Undead(1);
        vampire = new Vampire(1);
    });

    test('Bowman - moveDistance = 2, attackDistance = 2', () => {
        expect(bownam.moveDistance).toBe(2);
        expect(bownam.attackDistance).toBe(2);
    });

    test('Swordsman - moveDistance = 4, attackDistance = 1', () => {
        expect(swordsman.moveDistance).toBe(4);
        expect(swordsman.attackDistance).toBe(1);
    });

    test('Magician - moveDistance = 1, attackDistance = 4', () => {
        expect(magician.moveDistance).toBe(1);
        expect(magician.attackDistance).toBe(4);
    });

    test('Daemon - moveDistance = 1, attackDistance = 4', () => {
        expect(daemon.moveDistance).toBe(1);
        expect(daemon.attackDistance).toBe(4);
    });

    test('Undead - moveDistance = 4, attackDistance = 1', () => {
        expect(undead.moveDistance).toBe(4);
        expect(undead.attackDistance).toBe(1);
    });

    test('Vampire - moveDistance = 2, attackDistance = 2', () => {
        expect(vampire.moveDistance).toBe(2);
        expect(vampire.attackDistance).toBe(2);
    });
})