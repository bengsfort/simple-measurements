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

const NumberKey = ({ onPress, label }) => (
  <TouchableHighlight style={styles.keyboardKey} onPress={onPress.bind(label)}>
    <Text>{label}</Text>
  </TouchableHighlight>
);

const ActionKey = ({ onPress, label }) => (
  <TouchableHighlight style={styles.keyboardKey} onPress={onPress.bind('label')}>
    <Text>{label}</Text>
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
          <NumberKey onPress={onKeyPressed} label={'1'} />
          <NumberKey onPress={onKeyPressed} label={'2'} />
          <NumberKey onPress={onKeyPressed} label={'3'} />
        </View>
        <View style={styles.keyboardRow}>
          <NumberKey onPress={onKeyPressed} label={'4'} />
          <NumberKey onPress={onKeyPressed} label={'5'} />
          <NumberKey onPress={onKeyPressed} label={'6'} />
        </View>
        <View style={styles.keyboardRow}>
          <NumberKey onPress={onKeyPressed} label={'7'} />
          <NumberKey onPress={onKeyPressed} label={'8'} />
          <NumberKey onPress={onKeyPressed} label={'9'} />
        </View>
        <View style={styles.keyboardRow}>
          {hasNegativeButton &&
            <ActionKey onPress={onActionPressed} label={'-'} />
          }
          <NumberKey onPress={onKeyPressed} label={'0'} />
          <ActionKey onPress={onActionPressed} label={'Cancel'} />
        </View>
      </View>
    );
  }
}