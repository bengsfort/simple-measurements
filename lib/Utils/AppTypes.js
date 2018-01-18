/**
 * @providesModule AppTypes
 * @flow
 */

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
  allowNegatives?: boolean;
  labelX: string;
  labelY: string;
  placeholderX: string;
  placeholderY: string;
  calcX: (x : number) => number;
  calcY: (y : number) => number;
  theme: StyleSheet.Styles;
};
