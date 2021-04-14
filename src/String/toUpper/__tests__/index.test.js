import toUpper from '../index';

describe('test toUpper', () => {
  it('toUpper should defined', () => {
    expect(toUpper).toBeDefined();
  });

  it('toUpper should work', () => {
    expect(toUpper('abc')).toBe('ABC');
    expect(toUpper(123)).toBe('');
  });
});
