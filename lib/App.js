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
import MenuView from 'MenuView';
import MenuButton from 'MenuButton';
import ConversionView from 'ConversionView';
import { RouteType } from './Utils/AppTypes';

export default class App extends Component {
  state: {
    route: RouteType;
    menuActive: Boolean;
  };

  constructor(args) {
    super(args);
    this.state = {
      route: Routes[1],
      menuActive: false,
    };
  }

  navigate = (routeIndex: Number): void => {
    this.setState({
      route: Routes[routeIndex],
      menuActive: !this.state.menuActive,
    });
    /** Todo: resetting the state for the route change is causing a re-mount; fix */
  }

  toggleMenu = (): void => {
    this.setState({
      menuActive: !this.state.menuActive,
    });
  }

  render() {
    const { route, menuActive } = this.state;
    return (
      <View style={styles.container}>
        <ConversionView route={route} />
        <MenuView
          active={menuActive}
          onExit={this.toggleMenu}
          onNavigate={this.navigate}
        />
        <MenuButton
          active={!menuActive}
          onPress={this.toggleMenu}
          style={styles.menu_button}
        />
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
