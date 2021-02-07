import { TypeEnum } from '../../../Enum';
import type from '../index';

test('type', () => {
  expect(type({})).toBe(TypeEnum.OBJECT);
  expect(type(1)).toBe(TypeEnum.NUMBER);
  expect(type(false)).toBe(TypeEnum.BOOLEAN);
  expect(type('s')).toBe(TypeEnum.STRING);
  expect(type(null)).toBe(TypeEnum.NULL);
  expect(type([])).toBe(TypeEnum.ARRAY);
  expect(type(/[A-z]/)).toBe(TypeEnum.REG_EXP);
  expect(type(() => {})).toBe(TypeEnum.FUNCTION);
  expect(type(undefined)).toBe(TypeEnum.UNDEFINED);
});
