import simpleAdd from '../index';

test('simpleAdd', () => {
  expect(simpleAdd(1, 2)).toBe(3);
  expect(simpleAdd(2, 3)).toBe(5);
  expect(simpleAdd(5)(10)).toBe(15);
  expect(simpleAdd(3)(4)).toBe(7);
});
