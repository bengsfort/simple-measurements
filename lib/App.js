/**
 * @providesModule App
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Routes from 'Routes';
import MenuButton from 'MenuButton';
import ConversionView from 'ConversionView';

export default class App extends Component {
  constructor(args) {
    super(args);
    this.state = {
      route: Routes[1],
    };
  }

  render() {
    const { route } = this.state;
    return (
      <View style={styles.container}>
        <ConversionView route={route} />
        <MenuButton onPress={() => console.warn('clicked!')} style={styles.menu_button} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menu_button: {
    position: 'absolute',
    top: 32,
    left: 16,
  },
});
