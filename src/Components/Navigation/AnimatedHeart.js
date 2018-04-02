/**
 * @providesModule AnimatedHeart
 * @flow
 */

import React, { Component } from 'react';
import {
  Animated,
  StyleSheet,
} from 'react-native';
import ColoursStyle from 'ColoursStyle';

export default class AnimatedHeart extends Component {
  state: {
    animationElapsed: Animated.Value;
  };

  animation: Animated.CompositeAnimation;

  constructor(...args) {
    super(...args);
    this.state = {
      animationElapsed: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.startAnimation();
  }

  componentWillUnmount() {
    if (this.animation) {
      this.animation.stop();
      this.animation = null;
    }
  }

  startAnimation = () => {
    const { animationElapsed } = this.state;
    const animation = Animated.spring(animationElapsed, {
      toValue: 1,
      duration: 2.5 * 1000,
      useNativeDriver: true,
    });

    animation.start(({ finished }) => {
      if (finished) {
        this.animation = null;
        animationElapsed.setValue(0);
        setTimeout(() => {
          this.startAnimation();
        }, 5 * 1000);
      }
    });

    this.animation = animation;
  }

  getRotation(): StyleSheet.NamedStyles {
    return {
      transform: [{
        rotate: this.state.animationElapsed.interpolate({
          inputRange: [0, 0.25, 0.75, 1],
          outputRange: ['0deg', '30deg', '-30deg', '0deg'],
        }),
      }],
    };
  }

  render() {
    return (
      <Animated.Text style={[styles.heart, this.getRotation()]}>♥</Animated.Text>
    );
  }
}

const styles = StyleSheet.create({
  heart: {
    color: ColoursStyle.red[500],
  },
});
