import concat from '../index';

test('concat', () => {
  expect(concat('ABC', 'DEF')).toBe('ABCDEF');
  expect(concat('ABC')('DEF')).toBe('ABCDEF');
  expect(concat([4, 5, 6], [1, 2, 3])).toEqual([4, 5, 6, 1, 2, 3]);
  expect(concat([1, 2, 3])([4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  expect(concat([], [])).toEqual([]);

  try {
    expect(concat([1])('1')).toThrow(
      new TypeError(toString('1') + ' is not an array')
    );
  } catch (error) {}

  try {
    expect(concat('1')(1)).toThrow(
      new TypeError(toString(1) + ' is not a string')
    );
  } catch (error) {}

  try {
    expect(concat(1)(1)).toThrow(
      new TypeError(toString(1) + ' is not an array or a string')
    );
  } catch (error) {}
});
