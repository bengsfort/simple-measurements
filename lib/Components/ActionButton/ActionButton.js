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
      style={[Styles.wrapper, theme]}
    >
      <Text style={Styles.contents}>{label}</Text>
    </TouchableOpacity>
  );
}
