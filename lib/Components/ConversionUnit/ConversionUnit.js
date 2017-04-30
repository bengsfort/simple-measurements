/**
 * @providesModule ConversionUnit
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableHighlight,
} from 'react-native';

import { RouteType, ColourTheme } from 'AppTypes';
import Styles from 'ConversionUnitStyles';

export default class ConversionUnit extends Component {
	props: {
		label: string;
		calculation: (val: number) => number;
		onChange: (val: number) => void;
		placeholder: string;
		value: string;
		theme: ColourTheme;
	}

	static defaultProps = {
		onChange: (x) => {},
	}

	constructor(props) {
		super(props);
		this.state = {
			dirty: false,
			editing: false,
		};
	}

	_onInputUpdated = (text) => {
		this.props.onChange(parseFloat(text.replace(',', '.')));
	}

	_onFinishedEditing = () => {
		this.setState({
			editing: false,
			dirty: true,
		});
	}

	_renderInput() {
		const { theme, placeholder, value } = this.props;
		return (
			<TextInput
				ref={(ref) => { this._textInput = ref; }}
				editable={true}
				autoFocus={true}
				style={[Styles.input, theme.input]}
        maxLength={5}
        blurOnSubmit={true}
				value={value}
				selectTextOnFocus={true}
        placeholder={value}
        placeholderTextColor="rgba(255, 255, 255, 0.2)"
        underlineColorAndroid='transparent'
        autoCorrect={false}
        keyboardType='numeric'
        returnKeyType='done'
				onChangeText={this._onInputUpdated}
				onBlur={this._onFinishedEditing}
				onEndEditing={this._onFinishedEditing}
			/>
		);
	}

	_onResultPress = () => {
		this.setState({
			dirty: true,
			editing: true,
		});
	}

	_renderResult() {
		const { theme, value } = this.props;
		return (
			<TouchableHighlight onPress={this._onResultPress}>
				<Text style={[Styles.result, theme.input]}>{value}</Text>
			</TouchableHighlight>
		);
	}

	render() {
		const { label, theme, themeVariant } = this.props;
		return (
			<View style={Styles.wrapper}>
				{this.state.editing ? this._renderInput() : this._renderResult()}
				<Text style={[Styles.label, theme.label]}>{label}</Text>
			</View>
		);
	}
}
