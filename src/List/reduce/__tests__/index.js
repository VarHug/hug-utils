import reduce from '../index';
import { simpleSubtract, simpleAdd, simpleMultiply } from '../../../Math';

test('reduce', () => {
  expect(reduce(simpleSubtract, 0, [1, 2, 3, 4])).toBe(-10);
  expect(reduce(simpleAdd)(0)([1, 2, 3, 4])).toBe(10);
  expect(reduce(simpleMultiply, 1)([1, 2, 3, 4])).toBe(24);
});
