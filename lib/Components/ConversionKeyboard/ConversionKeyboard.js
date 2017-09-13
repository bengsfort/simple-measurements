/**
 * @providesModule ConversionKeyboard
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

import styles from 'ConversionKeyboardStyles';
import { ColourTheme } from 'AppTypes';

const NumberKey = ({ onPress, label, theme }) => (
  <TouchableHighlight
    style={styles.keyboardKey}
    onPress={() => onPress(label)}
    underlayColor={'#FFFFFF'}
    activeOpacity={0.75}
  >
    <View style={[styles.keyboardKeyWrapper, theme.number_key]}>
      <Text style={theme.number_key_label}>{label}</Text>
    </View>
  </TouchableHighlight>
);

const ActionKey = ({ onPress, label, theme }) => (
  <TouchableHighlight
    style={styles.keyboardKey}
    onPress={() => onPress(label)}
    underlayColor={'#FFFFFF'}
    activeOpacity={0.75}
  >
    <View style={[styles.keyboardKeyWrapper, theme.action_key]}>
      <Text style={theme.number_key_label}>{label}</Text>
    </View>
  </TouchableHighlight>
);

export default class ConversionKeyboard extends Component {
  props: {
    hasNegativeButton: boolean;
    onKeyPressed: (string) => void;
    onActionPressed: (string) => void;
    theme: ColourTheme;
  };

  render() {
    const {
      hasNegativeButton,
      onKeyPressed,
      onActionPressed,
    } = this.props;
    return (
      <View style={styles.keyboard}>
        <View style={styles.keyboardRow}>
          <NumberKey onPress={onKeyPressed} label={'1'} {...this.props} />
          <NumberKey onPress={onKeyPressed} label={'2'} {...this.props} />
          <NumberKey onPress={onKeyPressed} label={'3'} {...this.props} />
        </View>
        <View style={styles.keyboardRow}>
          <NumberKey onPress={onKeyPressed} label={'4'} {...this.props} />
          <NumberKey onPress={onKeyPressed} label={'5'} {...this.props} />
          <NumberKey onPress={onKeyPressed} label={'6'} {...this.props} />
        </View>
        <View style={styles.keyboardRow}>
          <NumberKey onPress={onKeyPressed} label={'7'} {...this.props} />
          <NumberKey onPress={onKeyPressed} label={'8'} {...this.props} />
          <NumberKey onPress={onKeyPressed} label={'9'} {...this.props} />
        </View>
        <View style={styles.keyboardRow}>
          {hasNegativeButton &&
            <ActionKey onPress={onActionPressed} label={'-'} {...this.props} />
          }
          <NumberKey onPress={onKeyPressed} label={'0'} {...this.props} />
          <ActionKey onPress={onActionPressed} label={'Cancel'} {...this.props} />
        </View>
      </View>
    );
  }
}