/**
 * @providesModule MenuFooter
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import ColoursStyle from 'ColoursStyle';

/** @todo: Add link to username, maybe make  heart wiggle a bit <3 */
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
});
