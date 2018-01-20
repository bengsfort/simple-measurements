/**
 * @providesModule ConversionUnitStyles
 * @flow
 */

import { StyleSheet } from 'react-native';

const TEXT_SIZE = 75;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  result: {
    fontSize: TEXT_SIZE - 10,
    textAlign: 'right',
  },
  result_placeholder: {
    color: 'rgba(255, 255, 255, 0.2)',
  },
  label: {
    marginHorizontal: 12,
    fontSize: TEXT_SIZE,
  },
  underline: {
    height: 4,
    marginHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
});

export default styles;
