/**
 * @providesModule ConversionKeyboard
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

import type { ColourTheme } from 'AppTypes';

type KeyPropType = {
  label: String;
  theme: StyleSheet;
  onPress: (String) => void;
};

const NumberKey = ({ onPress, label, theme }: KeyPropType) => (
  <TouchableHighlight
    style={styles.keyboardKey}
    onPress={() => onPress(label)}
    underlayColor="#FFFFFF"
    activeOpacity={0.75}
  >
    <View style={[styles.keyboardKeyWrapper, theme.number_key]}>
      <Text style={theme.number_key_label}>{label}</Text>
    </View>
  </TouchableHighlight>
);

const ActionKey = ({ onPress, label, theme }: KeyPropType) => (
  <TouchableHighlight
    style={styles.keyboardKey}
    onPress={() => onPress(label)}
    underlayColor="#FFFFFF"
    activeOpacity={0.75}
  >
    <View style={[styles.keyboardKeyWrapper, theme.action_key]}>
      <Text style={theme.number_key_label}>{label}</Text>
    </View>
  </TouchableHighlight>
);

type KeyboardProps = {
  hasNegativeButton: Boolean;
  onKeyPressed: (String) => void;
  onActionPressed: (String) => void;
  theme: ColourTheme;
};

export default function ConversionKeyboard({
  onKeyPressed,
  onActionPressed,
  hasNegativeButton,
  theme,
}: KeyboardProps) {
  return (
    <View style={styles.keyboard}>
      <View style={styles.keyboardRow}>
        <NumberKey onPress={onKeyPressed} label="1" theme={theme} />
        <NumberKey onPress={onKeyPressed} label="2" theme={theme} />
        <NumberKey onPress={onKeyPressed} label="3" theme={theme} />
      </View>
      <View style={styles.keyboardRow}>
        <NumberKey onPress={onKeyPressed} label="4" theme={theme} />
        <NumberKey onPress={onKeyPressed} label="5" theme={theme} />
        <NumberKey onPress={onKeyPressed} label="6" theme={theme} />
      </View>
      <View style={styles.keyboardRow}>
        <NumberKey onPress={onKeyPressed} label="7" theme={theme} />
        <NumberKey onPress={onKeyPressed} label="8" theme={theme} />
        <NumberKey onPress={onKeyPressed} label="9" theme={theme} />
      </View>
      <View style={styles.keyboardRow}>
        {hasNegativeButton &&
          <ActionKey onPress={onActionPressed} label="-" theme={theme} />
        }
        <NumberKey onPress={onKeyPressed} label="0" theme={theme} />
        <ActionKey onPress={onActionPressed} label="." theme={theme} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  keyboard: {
    maxHeight: 250,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f8f8f8',
  },
  keyboardRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#ebebeb',
  },
  keyboardKey: {
    flex: 1,
  },
  keyboardKeyWrapper: {
    flexGrow: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyboardKeyLabel: {
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
});
