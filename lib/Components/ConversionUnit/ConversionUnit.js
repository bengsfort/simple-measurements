/**
 * @providesModule ConversionUnit
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';

import type { ColourTheme } from 'AppTypes';
import { parseTextValue } from 'Helpers';
import Styles from 'ConversionUnitStyles';

export default class ConversionUnit extends Component {
  props: {
    label: String;
    onPress: () => void;
    active: Boolean;
    value: String;
    theme: ColourTheme;
  };

  constructor(props) {
    super(props);
    // this.state = {
    //   editing: false,
    // };
  }

  // onInputUpdated = (text) => {
  //   const modifier = this.state.negative ? -1 : 1;
  //   this.props.onChange(modifier * parseTextValue(text));
  // }

  // onFinishedEditing = () => {
  //   this.setState({ editing: false });
  // }

  // _toggleNegativity = () => {
  //   this.props.onChange(-1 * parseTextValue(this.props.value));
  // }

  // renderInput() {
  //   const { theme, value } = this.props;
  //   return (
  //     <TextInput
  //       editable
  //       autoFocus
  //       style={[Styles.input, theme.input]}
  //       maxLength={4}
  //       blurOnSubmit
  //       clearTextOnFocus
  //       value={`${Math.abs(value)}`}
  //       selectTextOnFocus
  //       placeholder={`${Math.abs(value)}`}
  //       placeholderTextColor="rgba(255, 255, 255, 0.2)"
  //       underlineColorAndroid="transparent"
  //       autoCorrect={false}
  //       keyboardType="phone-pad"
  //       returnKeyType="done"
  //       onChangeText={this.onInputUpdated}
  //       onBlur={this.onFinishedEditing}
  //       onEndEditing={this.onFinishedEditing}
  //     />
  //   );
  // }

  // onResultPress = (): void => {
  //   this.props.onPress();
  // }

  renderResult() {
    const { theme, active, value } = this.props;
    return (
      <TouchableHighlight onPress={this.props.onPress} underlayColor="transparent">
        <Text style={[Styles.result, theme.input, active && Styles.result_active]}>
          {value}
        </Text>
      </TouchableHighlight>
    );
  }

  render() {
    const { label, theme } = this.props;
    return (
      <View style={Styles.wrapper}>
        {this.renderResult()}
        <Text style={[Styles.label, theme.label]}>{label}</Text>
      </View>
    );
  }
}
