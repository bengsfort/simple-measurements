/**
 * @providesModule MenuFooter
 * @flow
 */

/**
 * @providesModule MenuButton
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import ColoursStyle from 'ColoursStyle';

export default function MenuFooter() {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>
        Made with <Text style={styles.heart}>♥ </Text>
        by <Text style={styles.strong}>@bengsfort</Text>
      </Text>
      <Text style={styles.content}>in Helsinki, Finland</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: ColoursStyle.black[100],
  },
  content: {
    color: ColoursStyle.black[700],
  },
  heart: {
    color: ColoursStyle.red[500],
  },
  strong: {
    fontWeight: '800',
    color: ColoursStyle.black[800],
  },
  // container: {
  //   width: BUTTON_SIZE,
  //   height: BUTTON_SIZE,
  //   borderRadius: BUTTON_SIZE / 2,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: ColoursStyle.black[100],
  //   elevation: 2,
  //   shadowColor: 'black',
  //   shadowOpacity: 0.4,
  //   shadowRadius: 6,
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  // },
  // line: {
  //   width: 18,
  //   height: 3,
  //   backgroundColor: ColoursStyle.black[800],
  // },
  // line_first: {
  //   transform: [{
  //     translateY: -4,
  //   }],
  // },
  // line_last: {
  //   transform: [{
  //     translateY: 4,
  //   }],
  // },
});
