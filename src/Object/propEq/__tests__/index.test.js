import propEq from '../index';

test('propEq', () => {
  const abby = { name: 'Abby', age: 7, hair: 'blond' };
  const fred = { name: 'Fred', age: 12, hair: 'brown' };
  const isHairBrown = propEq('hair', 'brown');
  expect(isHairBrown(abby)).toBe(false);
  expect(isHairBrown(fred)).toBe(true);
});
