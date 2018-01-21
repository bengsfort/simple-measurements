/**
 * @providesModule MenuView
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Easing,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

import Colours from 'ColoursStyle';
import MenuHeader from 'MenuHeader';

const MENU_WIDTH: Number = 250;

export default class MenuView extends Component {
  props: {
    onExit: () => void;
    active: Boolean;
  };

  state: {
    transition: Animated.Value;
  }

  animation: Animated.CompositeAnimation;

  constructor(props) {
    super(props);
    this.state = {
      transition: new Animated.Value(0),
    };
  }

  componentWillReceiveProps(nextProps) {
    const { active } = this.props;
    if (active && !nextProps.active) {
      this.startAnimation(0);
    } else if (!active && nextProps.active) {
      this.startAnimation(1);
    }
  }

  componentWillUnmount() {
    if (this.animation) {
      this.animation.stop();
    }
  }

  startAnimation(target: Number, cb: () => void): void {
    const animation = Animated.timing(this.state.transition, {
      toValue: target,
      duration: 500,
      easing: Easing.bezier(0.46, 0.01, 0.62, 0.93),
      useNativeDriver: true,
    });
    animation.start(({ finished }) => {
      if (finished) {
        this.animation = null;
        if (cb) {
          cb();
        }
      }
    });
    this.animation = animation;
  }

  closeMenu = () => {
    this.startAnimation(0, this.props.onExit);
  }

  getUnderlayOpacity() {
    return {
      opacity: this.state.transition,
    };
  }

  getMenuOffset() {
    return {
      transform: [{
        translateX: this.state.transition.interpolate({
          inputRange: [0, 1],
          outputRange: [-MENU_WIDTH, 0],
        }),
      }],
    };
  }

  render() {
    const { active } = this.props;
    if (!active) {
      return null;
    }
    return (
      <View style={styles.fullSize}>
        {active && (
          <TouchableWithoutFeedback onPress={this.closeMenu} style={styles.fullSize}>
            <Animated.View style={[styles.fullSize, styles.underlay, this.getUnderlayOpacity()]} />
          </TouchableWithoutFeedback>
        )}
        <Animated.View
          style={[
            styles.menu,
            this.getMenuOffset(),
          ]}
        >
          <MenuHeader />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fullSize: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  menu: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: MENU_WIDTH,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 32,
    backgroundColor: Colours.black[200],
  },
  underlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    elevation: 1,
  },
});
