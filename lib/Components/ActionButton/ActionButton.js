/**
 * @providesModule ActionButton
 * @flow
 */

import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Styles from 'ActionButtonStyles';

type ActionButtonProps = {
  theme: StyleSheet.Styles;
  label: String;
  onPress: () => void;
}
export default function ActionButton({
  theme,
  label,
  onPress,
}: ActionButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={[styles.wrapper, theme]}
    >
      <Text style={styles.contents}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
  },
});
