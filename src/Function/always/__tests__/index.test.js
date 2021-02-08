import always from '../index';

test('always', () => {
  const tee = always('tee');
  expect(tee()).toBe('tee');
});
