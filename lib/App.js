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
import ConversionKeyboard from 'ConversionKeyboard';

export default class App extends Component {
	render() {
		// return (
		// 	<ConversionView route={Routes[1]} />
		// );
		return (
			<ConversionKeyboard
				hasNegativeButton={true}
				onActionPressed={(action: string) => console.log('~~~Action has been pressed:', action)}
				onKeyPressed={(val: string) => console.log('~~~Number has been pressed:', val)}
			/>
		)
	}
}
