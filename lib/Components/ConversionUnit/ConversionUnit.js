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
import Styles from 'ConversionUnitStyles';

export default class ConversionUnit extends Component {
  props: {
    label: String;
    onChange: (val: number) => void;
    allowNegatives: Boolean;
    value: String;
    theme: ColourTheme;
  };

  // static defaultProps = {
  //   onChange: (x) => {}
  // }

  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      negative: parseFloat(props.value.replace(',', '.')) < 0,
    };
  }

  onInputUpdated = (text) => {
    const modifier = this.state.negative ? -1 : 1;
    this
      .props
      .onChange(modifier * parseFloat(text.replace(',', '.')));
  }

  onFinishedEditing = () => {
    this.setState({ editing: false });
  }

  _toggleNegativity = () => {
    this
      .props
      .onChange(-1 * parseFloat(this.props.value.replace(',', '.')));
  }

  renderInput() {
    const { theme, value } = this.props;
    return (
      <TextInput
        editable
        autoFocus
        style={[Styles.input, theme.input]}
        maxLength={4}
        blurOnSubmit
        clearTextOnFocus
        value={`${Math.abs(value)}`}
        selectTextOnFocus
        placeholder={`${Math.abs(value)}`}
        placeholderTextColor="rgba(255, 255, 255, 0.2)"
        underlineColorAndroid="transparent"
        autoCorrect={false}
        keyboardType="phone-pad"
        returnKeyType="done"
        onChangeText={this.onInputUpdated}
        onBlur={this.onFinishedEditing}
        onEndEditing={this.onFinishedEditing}
      />
    );
  }

  onResultPress = () => {
    this.setState({
      editing: true,
    });
  }

  renderResult() {
    const { theme, value } = this.props;
    return (
      <TouchableHighlight onPress={this.onResultPress}>
        <Text style={[Styles.result, theme.input]}>{value}</Text>
      </TouchableHighlight>
    );
  }

  render() {
    const { label, theme, allowNegatives } = this.props;
    const { editing } = this.state;
    return (
      <View style={Styles.wrapper}>
        {editing && allowNegatives && this.renderNegativeToggle()}
        {editing ? this.renderInput() : this.renderResult()}
        <Text style={[Styles.label, theme.label]}>{label}</Text>
      </View>
    );
  }
}
