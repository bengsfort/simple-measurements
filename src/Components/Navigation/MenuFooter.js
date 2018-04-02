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
      {[
      (<Text style={styles.content} key={0}>Made with </Text>),
      (<AnimatedHeart key={1} />),
      (<Text style={styles.content} key={2}> by </Text>),
      (<Text style={[styles.content, styles.strong]} key={3}>@bengsfort</Text>),
      ]}
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
    fontSize: 14,
    color: ColoursStyle.black[700],
  },
  strong: {
    fontWeight: '800',
    color: ColoursStyle.black[800],
  },
});
