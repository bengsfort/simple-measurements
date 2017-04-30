/**
 * @providesModule AppTypes
 * @flow
 */

'use strict';

import { StyleSheet } from 'react-native';

export type ColourTheme = {
	buttonBackground: string;
	lightBackground: string;
	darkBackground: string;
	placeholder: string;
	label: string;
	input: string;
};

export type RouteType = {
	path: string;
	label: string;
	labelX: string;
	labelY: string;
	calcX: (x: number) => number;
	calcY: (y: number) => number;
	theme: StyleSheet.Styles;
};
