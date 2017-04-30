/**
 * @providesModule App
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { RouteType } from 'AppTypes';
import Routes from 'Routes';

import ConversionView from 'ConversionView';

export default class App extends Component {
	render() {
		return (
			<ConversionView route={Routes[1]} />
		);
	}
}
