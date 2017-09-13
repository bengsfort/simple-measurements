/**
 * @providesModule ConversionKeyboardStyles
 * @flow
 */

'use strict';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  keyboard: {
    maxHeight: 250,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f8f8f8',
  },
  keyboardRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#ebebeb',
  },
  keyboardKey: {
    flex: 1,
  },
  keyboardKeyWrapper: {
    flexGrow: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyboardKeyLabel: {
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
});

export default styles;