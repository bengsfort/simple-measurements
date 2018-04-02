/**
 * @providesModule ExternalLink
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  Linking,
  StyleSheet,
} from 'react-native';
import ColoursStyle from '../../Utils/Colours.styles';

export default class ExternalLink extends Component {
  props: {
    style: StyleSheet.NamedStyles;
    label: String;
    link: String;
  };

  // state: {

  // };

  onPress = (): void => {
    Linking.openURL(this.props.link)
      .catch(err => console.error('Could not open web page.', err)); // eslint-disable-line
  };

  render() {
    return (
      <Text style={[styles.text, this.props.style]} onPress={this.onPress}>
        {this.props.label}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontWeight: '800',
    color: ColoursStyle.black[800],
  },
});
