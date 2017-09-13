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
    backgroundColor: '#383838',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ff0000',
  },
  keyboardKeyLabel: {
    textAlign: 'center',
  },
});

export default styles;