import values from '../index';

test('values', () => {
  expect(values({ a: 1, b: 2, c: 3 })).toEqual([1, 2, 3]);
  expect(values(['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
  expect(values('3')).toEqual([]);
});
