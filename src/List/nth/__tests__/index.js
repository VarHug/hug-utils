import nth from '../index';

test('nth', () => {
  const list = ['foo', 'bar', 'baz', 'quux'];
  expect(nth(1, list)).toBe('bar');
  expect(nth(-1)(list)).toBe('quux');
  expect(nth(-99)(list)).toBe(undefined);

  expect(nth(2, 'abc')).toBe('c');
  expect(nth(3)('abc')).toBe('');
});
