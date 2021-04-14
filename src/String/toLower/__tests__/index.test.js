import toLower from '../index';

describe('test toLower', () => {
  it('toLower should defined', () => {
    expect(toLower).toBeDefined();
  });

  it('toLower should work', () => {
    expect(toLower('ABC')).toBe('abc');
    expect(toLower(123)).toBe('');
  });
});
