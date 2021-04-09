import allPass from '../index';

describe('allPass', () => {
  it('allPass should be defined', () => {
    expect(allPass).toBeDefined();
  });

  it('allPass should work', () => {
    const isLessThanTen = (num) => num < 10;
    const isMoreThanFive = (num) => num > 5;
    const isBetweenFiveAndTen = allPass([isLessThanTen, isMoreThanFive]);

    expect(isBetweenFiveAndTen(5)).toBe(false);
    expect(isBetweenFiveAndTen(6)).toBe(true);
    expect(isBetweenFiveAndTen(7)).toBe(true);
    expect(isBetweenFiveAndTen(8)).toBe(true);
    expect(isBetweenFiveAndTen(9)).toBe(true);
    expect(isBetweenFiveAndTen(10)).toBe(false);

    const isAllLessThanTen = (arr) => arr.every(isLessThanTen);
    const isAllMoreThanFive = (arr) => arr.every(isMoreThanFive);
    const isAllBetweenFiveAndTen = allPass([
      isAllLessThanTen,
      isAllMoreThanFive
    ]);

    expect(isAllBetweenFiveAndTen([5, 6, 7, 8, 9, 10])).toBe(false);
    expect(isAllBetweenFiveAndTen([6, 7, 8, 9])).toBe(true);
  });
});
