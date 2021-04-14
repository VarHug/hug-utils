import invoker from '../index';

describe('test invoker', () => {
  it('invoker should defined', () => {
    expect(invoker).toBeDefined();
  });

  it('invoker should work', () => {
    const sliceFrom = invoker(1, 'slice');
    expect(sliceFrom(6, 'abcdefghijklm')).toBe('ghijklm');

    const sliceFrom6 = invoker(2, 'slice');
    expect(sliceFrom6(6, 8, 'abcdefghijklm')).toBe('gh');

    const toUpper = invoker(0, 'toUpperCase');
    expect(toUpper('abc')).toBe('ABC');

    const dog = {
      speak: () => 'Woof!'
    };
    const speak = invoker(0, 'speak');
    expect(speak(dog)).toBe('Woof!');

    try {
      expect(speak('cat')).toThrow('cat does not have a method named "speak"');
    } catch (error) {}
  });
});
