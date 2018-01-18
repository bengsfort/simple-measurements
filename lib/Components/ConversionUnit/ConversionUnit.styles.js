/**
 * @providesModule ConversionUnitStyles
 * @flow
 */

import { StyleSheet } from 'react-native';

const TEXT_SIZE = 75;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  result: {
    fontSize: TEXT_SIZE - 10,
    textAlign: 'right',
  },
  input: {
    flex: 1,
    alignSelf: 'center',
    fontSize: TEXT_SIZE,
    height: TEXT_SIZE,
    textAlign: 'right',
    borderColor: 'transparent',
    borderWidth: 0,
    // marginLeft: 55, backgroundColor: '#000',
  },
  label: {
    marginHorizontal: 12,
    fontSize: TEXT_SIZE,
  },
  negative_toggle: {
    flex: 1,
    alignSelf: 'center',
    height: TEXT_SIZE,
    width: 55,
    fontSize: TEXT_SIZE,
    textAlign: 'center',
  },
});

export default styles;
