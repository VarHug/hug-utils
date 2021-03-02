import find from '../index';
import { propEq } from '../../../Object';

test('find', () => {
  const xs = [{ a: 1 }, { a: 2 }, { a: 3 }];
  expect(find(propEq('a', 2))(xs)).toEqual({ a: 2 });
  expect(find(propEq('a', 4))(xs)).toBe(undefined);
});
