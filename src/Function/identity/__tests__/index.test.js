import identity from '../index';

test('identity', () => {
  expect(identity(1)).toBe(1);
  const obj = {};
  expect(identity(obj)).toBe(obj);
});
