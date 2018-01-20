import {
  appendToValue,
  getMaxLength,
  parseTextValue,
} from 'Helpers';

describe('Helpers', () => {
  describe('#parseTextValue', () => {
    test('should take a string and parse it to a number', () => {
      expect(parseTextValue('5.3')).toBe(5.3);
      expect(parseTextValue('1,2')).toBe(1.2);
    });
  });

  describe('#getMaxLength', () => {
    test('string with no modifiers should have default length', () => {
      expect(getMaxLength('12', 4)).toBe(4);
    });

    test('string with negative modifier should have default length + 1', () => {
      expect(getMaxLength('-12', 4)).toBe(5);
    });

    test('string with decimals should have default length + 1', () => {
      expect(getMaxLength('12.5', 4)).toBe(5);
      expect(getMaxLength('12,3', 4)).toBe(5);
    });

    test('string with both modifiers should have default length + 2', () => {
      expect(getMaxLength('-12.3', 4)).toBe(6);
      expect(getMaxLength('-12,3', 4)).toBe(6);
    });
  });

  describe('#appendToValue', () => {
    test('should return a number with the value added to the tail', () => {
      expect(appendToValue(12, '3', 4)).toBe(123);
      expect(appendToValue(0, '5', 4)).toBe(5);
      expect(appendToValue(-12, '5', 4)).toBe(-125);
      expect(appendToValue(-12.1, '5', 4)).toBe(-12.15);
    });

    test('should return the same number if it is already the max length', () => {
      expect(appendToValue(1234, '5', 4)).toBe(1234);
      expect(appendToValue(-1234, '5', 4)).toBe(-1234);
      expect(appendToValue(-12.34, '5', 4)).toBe(-12.34);
    });
  });
});
