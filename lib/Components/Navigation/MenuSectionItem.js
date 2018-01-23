/**
 * @providesModule MenuSectionItem
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import ColoursStyles from '../../Utils/Colours.styles';

type MenuSectionItemProps = {
  label: String;
  route: Number;
  onPress: () => void;
};

export default function MenuSectionItem({ label, route, onPress }: MenuSectionItemProps) {
  return (
    <TouchableHighlight
      style={styles.container}
      underlayColor={ColoursStyles.black[200]}
      activeOpacity={0.5}
      onPress={() => onPress(route)}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  label: {
  },
});
