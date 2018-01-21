/**
 * @providesModule MenuHeader
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Colours from 'ColoursStyle';

export default function MenuHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simple Conversions</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colours.black[600],
  },
  title: {
    fontSize: 20,
    color: Colours.black[800],
  },
});
