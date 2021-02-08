import keys from '../index';

test('keys', () => {
  expect(keys({ a: 1, b: 2, c: 3 })).toEqual(['a', 'b', 'c']);
  expect(keys(['a', 'b', 'c'])).toEqual(['0', '1', '2']);
  expect(keys('3')).toEqual([]);
});
