import ap from '../index';
import { simpleAdd, simpleMultiply } from '../../../Math';

describe('ap', () => {
  it('ap should be defined', () => {
    expect(ap).toBeDefined();
  });

  it('ap should work', () => {
    const res = [2, 4, 6, 4, 5, 6];
    expect(ap([simpleMultiply(2), simpleAdd(3)], [1, 2, 3])).toEqual(res);

    expect(ap([simpleMultiply(2), simpleAdd(3)])([1, 2, 3])).toEqual(res);
  });
});
