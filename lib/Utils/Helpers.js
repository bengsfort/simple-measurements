/**
 * @providesModule Helpers
 * @flow
 */

const parseTextValue = (text: String): Number => parseFloat(text.replace(',', '.'));

export default {
  parseTextValue,
};
