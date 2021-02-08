import isObject from '../index';

test('isObject', () => {
  expect(isObject({})).toBe(true);
  expect(isObject([])).toBe(false);
  expect(isObject('obj')).toBe(false);
});
