export default class Character {
    constructor(level) {
        if (new.target === Character) {
            throw new Error('Нельзя создать объект класса Character')
        }
        this.level = level;
        this.attack = 0;
        this.defence = 0;
        this.health = 100;
        this.type = '';

    };

}