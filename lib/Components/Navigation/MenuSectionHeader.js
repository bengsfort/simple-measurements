/**
 * @providesModule MenuSectionHeader
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Icons from '../../Utils/Icons';
import ColoursStyles from '../../Utils/Colours.styles';

type MenuSectionHeaderProps = {
  label: String;
};

export default function MenuSectionHeader({ label }: MenuSectionHeaderProps) {
  const icon = Icons[label];
  return (
    <View style={styles.container}>
      {icon && <Text style={styles.icon}>{icon}</Text>}
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: {
    fontFamily: 'Glyphter',
    fontSize: 20,
    marginRight: 12,
    color: ColoursStyles.black[700],
  },
  label: {
    fontSize: 20,
    color: ColoursStyles.black[800],
  },
});
