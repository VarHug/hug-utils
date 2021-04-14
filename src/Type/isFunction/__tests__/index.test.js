import isFunction from '../index';

describe('test isFunction', () => {
  it('isFunction should defined', () => {
    expect(isFunction).toBeDefined();
  });

  it('isFunction should work', () => {
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction({})).toBe(false);
  });
});
