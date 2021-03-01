import map from '../index';

test('map', () => {
  const double = (x) => x * 2;
  expect(map(double, [1, 2, 3])).toEqual([2, 4, 6]);
  expect(map(double, { x: 1, y: 2, z: 3 })).toEqual({ x: 2, y: 4, z: 6 });
  expect(map(double)([1, 2, 3])).toEqual([2, 4, 6]);
  expect(map(double)({ x: 1, y: 2, z: 3 })).toEqual({ x: 2, y: 4, z: 6 });
  expect(map(double, 123)).toEqual({});
});
