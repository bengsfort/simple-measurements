/**
 * @providesModule Helpers
 * @flow
 */

export const parseTextValue = (text: String): Number => parseFloat(text.replace(',', '.'));

export const getMaxLength = (str: String, baseLength: Number): Number => {
  let max = baseLength;
  if (str.indexOf('.') !== -1 || str.indexOf(',') !== -1) {
    max += 1;
  }
  if (str.indexOf('-')) {
    max += 1;
  }
  return max;
};

export const appendToValue = (value: Number, newValue: String, maxLength: Number): Number => {
  const stringValue = `${value}`;
  const stringLength = stringValue.length;
  const adjustedMaxLength = getMaxLength(stringValue, maxLength);
  if (stringLength < adjustedMaxLength) {
    return parseFloat(`${stringValue}${newValue}`);
  }
  return value;
};
