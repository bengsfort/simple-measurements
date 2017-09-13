/**
 * @providesModule ActionButtonStyles
 * @flow
 */

'use strict';

import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexGrow: 1,
    flexBasis: 50,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  contents: {
    textAlign: 'center',
    color: '#fff',
  }
});

export default Styles;
