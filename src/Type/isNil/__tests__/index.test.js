import isNil from '../index';

test('isNil', () => {
  expect(isNil(null)).toBe(true);
  expect(isNil(undefined)).toBe(true);
  expect(isNil(0)).toBe(false);
  expect(isNil([])).toBe(false);
  expect(isNil({})).toBe(false);
});
