import Bowman from '../bowman';
import Swordsman from '../shordsman';
import Magician from '../magician';
import Undead from '../undead';
import Zombie from '../zombie';
import Daemon from '../daemon';
import Character from '../character';

test('Проверка героя Bowman', () => {
  const result = new Bowman('Bombom');
  expect(result).toEqual({
    name: 'Bombom',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    deffence: 25,
  });
});

test('Проверка героя Swordsman', () => {
  const result = new Swordsman('Bombom');
  expect(result).toEqual({
    name: 'Bombom',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    deffence: 10,
  });
});

test('Проверка героя Magician', () => {
  const result = new Magician('Bombom');
  expect(result).toEqual({
    name: 'Bombom',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    deffence: 40,
  });
});

test('Проверка героя Undead', () => {
  const result = new Undead('Bombom');
  expect(result).toEqual({
    name: 'Bombom',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    deffence: 25,
  });
});

test('Проверка героя Zombie', () => {
  const result = new Zombie('Bombom');
  expect(result).toEqual({
    name: 'Bombom',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    deffence: 10,
  });
});

test('Проверка героя Daemon', () => {
  const result = new Daemon('Bombom');
  expect(result).toEqual({
    name: 'Bombom',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    deffence: 40,
  });
});

const heroeProperty = [
  ['имя не строка', 'Ошибка! Имя должно быть строкой', 123, 'Bowman'],
  ['1 символ', 'Ошибка! Имя слишком ороткое/длинное', 'B', 'Bowman'],
  ['больше 10 символов', 'Ошибка! Имя слишком ороткое/длинное', 'Buuuuumbooom', 'Bowman'],
  ['несуществующий тип', 'Ошибка! Такого персонажа не существует', 'Bombom', 'Dubina'],
];

const heroes = test.each(heroeProperty);

heroes('testing heroes errors with %s __', (__, expected, heroeName, heroeType) => {
  const result = new Character(heroeName, heroeType);
  expect(result).toBe(expected);
});

test('Проверка метода levelUp', () => {
  const result = new Undead('Bombom');
  result.levelUp();
  expect(result).toEqual({
    name: 'Bombom',
    type: 'Undead',
    health: 100,
    level: 2,
    attack: 30,
    deffence: 30,
  });
});

test('Проверка метода levelUp, если health = 0', () => {
  expect(() => {
    const result = new Undead('Bombom');
    result.health = 0;
    result.levelUp();
  }).toThrow('Нельзя повысить левел умершего');
});

test('Проверка метода damage(points)', () => {
  const result = new Undead('Bombom');
  result.damage(50);
  expect(result.health).toBeCloseTo(62.5, 0);
});

test('Проверка метода damage(points), если health < 1', () => {
  expect(() => {
    const result = new Undead('Bombom');
    result.health = 0;
    result.damage(50);
  }).toThrow('Персонаж умер, нельзя повысить уровень');
});
