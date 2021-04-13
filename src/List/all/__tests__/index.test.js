import all from '../index';

describe('test all', () => {
  it('all should defined', () => {
    expect(all).toBeDefined();
  });

  it('all should work', () => {
    const moreThanFive = (n) => n > 5;

    expect(all(moreThanFive, [1, 2, 3, 4])).toBe(false);
    expect(all(moreThanFive)([6, 7, 8, 9])).toBe(true);
  });
});
