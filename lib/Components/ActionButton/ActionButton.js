/**
 * @providesModule ActionButton
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Styles from 'ActionButtonStyles';

export default class ActionButton extends Component {
  props: {
    theme: StyleSheet.Styles;
    label: string;
    onPress: () => void;
  }

  render() {
    const { onPress, label, theme } = this.props;
    return (
      <TouchableOpacity
        style={[Styles.wrapper, theme]}
        onPress={this.props.onPress}
        activeOpacity={0.9}
      >
        <Text style={Styles.contents}>{label}</Text>
      </TouchableOpacity>
    );
  }
}
