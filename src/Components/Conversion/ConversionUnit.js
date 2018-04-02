/**
 * @providesModule ConversionUnit
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

import type { ColourTheme } from 'AppTypes';

const TEXT_SIZE = 75;

export default class ConversionUnit extends Component {
  props: {
    label: String;
    onPress: () => void;
    active: Boolean;
    placeholder: Boolean;
    value: String;
    theme: ColourTheme;
  };

  state: {
    animationActive: Boolean;
    underlineScale: Animated.Value;
  };

  animationInstance: Animated.CompositeAnimation;

  constructor(props) {
    super(props);
    this.state = {
      animationActive: false,
      underlineScale: new Animated.Value(0),
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.active && nextProps.active) {
      this.startAnimation(1);
    } else if (this.props.active && !nextProps.active) {
      this.startAnimation(0);
    }
  }

  componentWillUnmount() {
    if (this.state.animationActive) {
      this.animationInstance.stop();
    }
  }

  startAnimation(target: Number) {
    if (this.state.animationActive) {
      this.animationInstance.stop();
    }

    this.setState(() => ({ animationActive: true }));
    this.state.underlineScale.setValue(target > 0 ? 0 : 1);
    const animation = Animated.spring(this.state.underlineScale, {
      toValue: target,
      useNativeDriver: true,
    });
    animation.start(({ finished }) => {
      if (finished) {
        this.setState(() => ({ animationActive: false }));
        this.state.underlineScale.setValue(target);
      }
    });
    this.animationInstance = animation;
  }

  getUnderlineScale() {
    const { underlineScale } = this.state;
    return {
      opacity: underlineScale,
      transform: [{
        scaleX: underlineScale,
      }],
    };
  }

  render() {
    const {
      onPress,
      theme,
      value,
      placeholder,
      active,
      label,
    } = this.props;
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <TouchableHighlight onPress={onPress} underlayColor="transparent">
            <Text
              style={[
                styles.result,
                theme.input,
                active && styles.result_active,
                placeholder && styles.result_placeholder,
              ]}
            >
              {value}
            </Text>
          </TouchableHighlight>
          <Text style={[styles.label, theme.label]}>{label}</Text>
        </View>
        <Animated.View
          style={[
            styles.underline,
            theme.input_underline,
            this.getUnderlineScale(),
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  result: {
    fontSize: TEXT_SIZE - 10,
    textAlign: 'right',
  },
  result_placeholder: {
    color: 'rgba(255, 255, 255, 0.2)',
  },
  label: {
    marginHorizontal: 12,
    fontSize: TEXT_SIZE,
  },
  underline: {
    alignSelf: 'flex-end',
    width: 320,
    height: 4,
    marginHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
});
