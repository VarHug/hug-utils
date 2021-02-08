import isArray from '../index';

test('isArray', () => {
  expect(isArray([1, 2, 3, 4])).toBe(true);
  expect(isArray([])).toBe(true);
  expect(isArray({})).toBe(false);
  expect(isArray(3)).toBe(false);
});
