import isString from '../index';

test('isString', () => {
  expect(isString('s')).toBe(true);
  // eslint-disable-next-line
  expect(isString(new String('s'))).toBe(true);
  expect(isString(4)).toBe(false);
  expect(isString([])).toBe(false);
});
