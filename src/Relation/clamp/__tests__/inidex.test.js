import clamp from '../index';

test('clamp', () => {
  expect(clamp(1, 10, -5)).toBe(1);
  expect(clamp(1, 10, 15)).toBe(10);
  expect(clamp(1, 10, 4)).toBe(4);
});
