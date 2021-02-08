import gt from '../index';

test('gt', () => {
  expect(gt(2, 1)).toBe(true);
  expect(gt(2, 2)).toBe(false);
  expect(gt(2)(3)).toBe(false);
  expect(gt('a', 'z')).toBe(false);
  expect(gt('z')('a')).toBe(true);
});
