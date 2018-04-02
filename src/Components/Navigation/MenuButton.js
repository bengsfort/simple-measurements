/**
 * @providesModule MenuButton
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Animated,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import ColoursStyle from 'ColoursStyle';
import { MENU_BUTTON_DELAY } from '../../Utils/Constants';

const BUTTON_SIZE = 48;

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableHighlight);

export default class MenuButton extends Component {
  props: {
    active: Boolean;
    onPress: () => void;
    style: StyleSheet.styles;
  };

  state: {
    transition: Animated.Value;
  };

  animation: Animated.CompositeAnimation;

  constructor(props) {
    super(props);
    this.state = {
      transition: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.startAnimation(1);
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

  startAnimation(target: Number): void {
    const animation = Animated.spring(this.state.transition, {
      toValue: target,
      delay: target === 1 ? MENU_BUTTON_DELAY : 0,
      useNativeDriver: true,
    });
    animation.start(({ finished }) => {
      if (finished) {
        this.animation = null;
      }
    });
    this.animation = animation;
  }

  getAnimatedStyles(): StyleSheet.NamedStyles {
    const { transition } = this.state;
    return {
      opacity: transition,
      transform: [{
        scale: transition,
      }],
    };
  }

  render() {
    const { onPress } = this.props;
    return (
      <AnimatedTouchable
        onPress={onPress}
        underlayColor={ColoursStyle.black[400]}
        activeOpacity={1}
        style={[
          styles.container,
          this.props.style,
          this.getAnimatedStyles(),
        ]}
      >
        <View>
          <View style={[styles.line, styles.line_first]} />
          <View style={styles.line} />
          <View style={[styles.line, styles.line_last]} />
        </View>
      </AnimatedTouchable>
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
