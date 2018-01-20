/**
 * @providesModule MenuView
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

export default class MenuView extends Component {
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
      <View />
    );
  }
}