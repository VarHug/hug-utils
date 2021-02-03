import type from '../index';

test('type', () => {
  expect(type({})).toBe('Object');
  expect(type(1)).toBe('Number');
  expect(type(false)).toBe('Boolean');
  expect(type('s')).toBe('String');
  expect(type(null)).toBe('Null');
  expect(type([])).toBe('Array');
  expect(type(/[A-z]/)).toBe('RegExp');
  expect(type(() => {})).toBe('Function');
  expect(type(undefined)).toBe('Undefined');
});
