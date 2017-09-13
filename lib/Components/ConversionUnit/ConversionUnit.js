/**
 * @providesModule ConversionUnit
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
	View,
	Text,
	Keyboard,
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
			editing: false,
			negative: parseFloat(props.value.replace(',', '.')) < 0,
		};
	}

	_onInputUpdated = (text) => {
		const modifier = this.state.negative ? -1 : 1;
		this.props.onChange(modifier * parseFloat(text.replace(',', '.')));
	}

	_onFinishedEditing = () => {
		this.setState({ editing: false });
	}

	_toggleNegativity = () => {
		this.props.onChange(-1 * parseFloat(this.props.value.replace(',', '.')));
	}

	_renderInput() {
		const { theme, placeholder, value } = this.props;
		return (
			<TextInput
				editable={true}
				autoFocus={true}
				style={[Styles.input, theme.input]}
        maxLength={4}
        blurOnSubmit={true}
				clearTextOnFocus={true}
				value={`${Math.abs(value)}`}
				selectTextOnFocus={true}
        placeholder={`${Math.abs(value)}`}
        placeholderTextColor="rgba(255, 255, 255, 0.2)"
        underlineColorAndroid='transparent'
        autoCorrect={false}
        keyboardType='phone-pad'
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
		const {
			label,
			theme,
			themeVariant,
			allowNegatives,
		} = this.props;
		const { editing } = this.state;
		return (
			<View style={Styles.wrapper}>
				{editing && allowNegatives && this._renderNegativeToggle()}
				{editing ? this._renderInput() : this._renderResult()}
				<Text style={[Styles.label, theme.label]}>{label}</Text>
			</View>
		);
	}
}
