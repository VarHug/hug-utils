import simpleDivide from '../index';

test('simpleDivide', () => {
  expect(simpleDivide(71, 100)).toBe(0.71);
  expect(simpleDivide(1)(4)).toBe(0.25);
});
