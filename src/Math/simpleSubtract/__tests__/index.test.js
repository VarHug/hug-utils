import simpleSubtract from '../index';

test('simpleSubtract', () => {
  expect(simpleSubtract(10, 8)).toBe(2);
  expect(simpleSubtract(90)(30)).toBe(60);
});
