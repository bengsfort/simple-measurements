/**
 * @providesModule ConversionViewStyles
 * @flow
 */

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  half_container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  actions_container: {
    flex: 1,
    maxHeight: 50,
    flexDirection: 'row',
    // justifyContent: 'center', alignItems: 'stretch', flexWrap: 'nowrap',
  },
});

export default styles;
