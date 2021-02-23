import merge from '../index';

test('merge', () => {
  expect(merge({ a: 1, b: 1, c: 1 }, { b: 2, c: 2 })).toEqual({
    a: 1,
    b: 2,
    c: 2
  });
  expect(merge({ a: 1, b: 2 }, { b: 4, c: 5 })).toEqual({
    a: 1,
    b: 4,
    c: 5
  });
  expect(merge({ a: 1, b: 2 })({ b: 4, c: 5 })).toEqual({
    a: 1,
    b: 4,
    c: 5
  });
});
