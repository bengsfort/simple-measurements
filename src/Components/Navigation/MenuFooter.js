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
import ExternalLink from './ExternalLink';

export default function MenuFooter() {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Text style={styles.content}>Made with </Text>
        <AnimatedHeart />
        <Text style={styles.content}> by </Text>
        <ExternalLink
          style={[styles.content, styles.strong]}
          link="https://twitter.com/bengsfort"
          label="@bengsfort"
        />
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
    elevation: 3,
    zIndex: 5,
    backgroundColor: ColoursStyle.black[100],
    shadowColor: ColoursStyle.black[200],
    shadowOpacity: 1,
    shadowRadius: 3,
    shadowOffset: {
      width: -4,
      height: -4,
    },
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
