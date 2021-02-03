import simpleMultiply from '../index';

test('simpleMultiply', () => {
  expect(simpleMultiply(2, 5)).toBe(10);
  expect(simpleMultiply(2)(3)).toBe(6);
});
