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
import AnimatedHeart from './AnimatedHeart';

export default function MenuFooter() {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Text style={styles.content}>Made with </Text>
        <AnimatedHeart />
        <Text style={styles.content}> by </Text>
        <Text style={[styles.content, styles.strong]}>@bengsfort</Text>
      </View>
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
  topRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  content: {
    fontSize: 14,
    color: ColoursStyle.black[700],
  },
  strong: {
    fontWeight: '800',
    color: ColoursStyle.black[800],
  },
});
