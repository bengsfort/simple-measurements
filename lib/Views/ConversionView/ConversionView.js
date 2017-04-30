/**
 * @providesModule ConversionView
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';

import { RouteType } from 'AppTypes';

import ConversionUnit from 'ConversionUnit';
import styles from 'ConversionViewStyles';

export default class ConversionView extends Component {
	props: {
		route: RouteType;
	}

	constructor(props) {
		super(props);
		this.state = {
			x: props.route.placeholderX || 0,
			y: props.route.placeholderY || 0,
			editing: false,
		};
	}

	_onChangedX = (val) => {
		const x = !Number.isNaN(val) ? val : 0;
		this.setState({
			x: x,
			y: parseFloat(this.props.route.calcX(x).toFixed(2)),
		});
	}

	_onChangedY = (val) => {
		const y = !Number.isNaN(val) ? val : 0;
		this.setState({
			x: parseFloat(this.props.route.calcY(y).toFixed(2)),
			y: y,
		});
	}

	render() {
		const { route } = this.props;
		return (
			<KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
				<View style={[styles.half_container, route.theme.top_half]}>
					<ConversionUnit
						label={route.labelX}
						value={`${this.state.x}`}
						placeholder={route.placeholderX}
						onChange={this._onChangedX}
						theme={route.theme}
					/>
				</View>
				<View style={[styles.half_container, route.theme.bottom_half]}>
					<ConversionUnit
						label={route.labelY}
						value={`${this.state.y}`}
						placeholder={route.placeholderY}
						onChange={this._onChangedY}
						theme={route.theme}
					/>
				</View>
			</KeyboardAvoidingView>
		)
	}
}
