import Undead from '../undead';

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
