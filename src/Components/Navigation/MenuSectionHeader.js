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
    marginTop: 12,
    paddingBottom: 4,
    marginBottom: 4,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: ColoursStyles.black[200],
    elevation: 3,
    zIndex: 3,
    shadowColor: ColoursStyles.black[200],
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowOffset: {
      width: -8,
      height: 4,
    },
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
