export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string') {
      throw new Error('Ошибка! Имя должно быть строкой');
    }

    if (name.length < 2 || name.length > 10) {
      throw new Error('Ошибка! Имя слишком ороткое/длинное');
    }
    if (!['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie',
    ].includes(type)) {
      throw new Error('Ошибка! Такого персонажа не существует');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health < 1) {
      throw new Error('Нельзя повысить левел умершего');
    }
    this.level += 1;
    this.attack *= 1.2;
    this.deffence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health < 1) {
        throw new Error('Персонаж умер, нельзя повысить уровень')
    }
    this.health -= points * (1 - this.deffence / 100);
  }
}

