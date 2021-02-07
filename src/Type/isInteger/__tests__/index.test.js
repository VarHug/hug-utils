import isInteger from '../index';

test('isInteger', () => {
  expect(isInteger(3)).toBe(true);
  expect(isInteger(4.5)).toBe(false);
  expect(isInteger('4.3')).toBe(false);
  expect(isInteger(() => {})).toBe(false);
  expect(isInteger([])).toBe(false);
  expect(isInteger({})).toBe(false);
});
