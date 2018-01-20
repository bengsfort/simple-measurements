/**
 * @providesModule ConversionUnit
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
  TouchableHighlight,
} from 'react-native';

import type { ColourTheme } from 'AppTypes';
import Styles from 'ConversionUnitStyles';

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
    const animation = Animated.spring(this.state.underlineScale, {
      toValue: target,
      useNativeDriver: true,
    });
    animation.start(({ finished }) => {
      if (finished) {
        this.setState(() => ({ animationActive: false }));
      }
    });
    this.animationInstance = animation;
  }

  getUnderlineScale() {
    const { underlineScale } = this.state;
    return {
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
      <View style={Styles.wrapper}>
        <View style={Styles.container}>
          <TouchableHighlight onPress={onPress} underlayColor="transparent">
            <Text
              style={[
                Styles.result,
                theme.input,
                active && Styles.result_active,
                placeholder && Styles.result_placeholder,
              ]}
            >
              {value}
            </Text>
          </TouchableHighlight>
          <Text style={[Styles.label, theme.label]}>{label}</Text>
        </View>
        <Animated.View style={[Styles.underline, theme.input_underline, this.getUnderlineScale()]} />
      </View>
    );
  }
}
