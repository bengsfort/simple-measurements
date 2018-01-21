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
import ColoursStyle from 'ColoursStyle';

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
      <TouchableHighlight
        onPress={this.props.onPress}
        underlayColor={ColoursStyle.black[400]}
        activeOpacity={1}
        style={[
          styles.container,
          this.props.style,
        ]}
      >
        <View>
          <View style={[styles.line, styles.line_first]} />
          <View style={styles.line} />
          <View style={[styles.line, styles.line_last]} />
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
    backgroundColor: ColoursStyle.black[100],
    elevation: 2,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  line: {
    width: 18,
    height: 3,
    backgroundColor: ColoursStyle.black[800],
  },
  line_first: {
    transform: [{
      translateY: -4,
    }],
  },
  line_last: {
    transform: [{
      translateY: 4,
    }],
  },
});
