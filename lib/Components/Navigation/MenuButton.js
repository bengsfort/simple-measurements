/**
 * @providesModule MenuButton
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

const BUTTON_SIZE = 48;

export default class MenuButton extends Component {
  props: {
    onPress: () => void;
    style: StyleSheet.styles;
  };

  state: {
    active: Boolean;
  };

  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress} style={[styles.container, this.props.style]}>
        <View>
          <View style={styles.line} />
          <View style={styles.line} />
          <View style={styles.line} />
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    // @todo: shadow
  },
  line: {
    width: BUTTON_SIZE / 2,
    height: 2,
    backgroundColor: 'black',
  },
});
