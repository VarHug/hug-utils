import prop from '../index';

test('prop', () => {
  expect(prop('x', { x: 100 })).toBe(100);
  expect(prop('x')({})).toBe(undefined);
  expect(prop(0)([100])).toBe(100);
});
