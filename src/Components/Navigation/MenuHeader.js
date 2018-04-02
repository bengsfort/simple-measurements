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
      <Text style={styles.title}>Conversions</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 44,
    paddingBottom: 12,
    backgroundColor: Colours.black[100],
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colours.black[300],
    elevation: 3,
    zIndex: 5,
    shadowColor: Colours.black[200],
    shadowOpacity: 1,
    shadowRadius: 3,
    shadowOffset: {
      width: -4,
      height: 3,
    },
  },
  title: {
    fontSize: 20,
    color: Colours.black[800],
  },
});
