import find from '../index';

test('find', () => {
  const xs = [{ a: 1 }, { a: 2 }, { a: 3 }];
  const isAEqualTwo = ({ a }) => a === 2;
  const isAEqualFour = ({ a }) => a === 4;
  expect(find(isAEqualTwo)(xs)).toEqual({ a: 2 });
  expect(find(isAEqualFour)(xs)).toBe(undefined);
});
