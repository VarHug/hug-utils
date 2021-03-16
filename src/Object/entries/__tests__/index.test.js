import entries from '../index';

test('entries', () => {
  expect(entries({ foo: 'bar', baz: 42 })).toEqual([
    ['foo', 'bar'],
    ['baz', 42]
  ]);
  expect(entries({ 100: 'a', 2: 'b', 7: 'c' })).toEqual([
    ['2', 'b'],
    ['7', 'c'],
    ['100', 'a']
  ]);
});
