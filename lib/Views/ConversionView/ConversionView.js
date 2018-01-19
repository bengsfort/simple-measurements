/**
 * @providesModule ConversionView
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';

import { RouteType } from 'AppTypes';

import ActionButton from 'ActionButton';
import ConversionUnit from 'ConversionUnit';
import ConversionKeyboard from 'ConversionKeyboard';
import styles from 'ConversionViewStyles';

export default class ConversionView extends Component {
  props: {
    route: RouteType;
  };

  constructor(props) {
    super(props);
    this.state = {
      x: props.route.placeholderX || 0,
      y: props.route.placeholderY || 0,
      editing: false,
    };
  }

  onChangedX = (val) => {
    const x = !Number.isNaN(val) ? val : 0;
    this.setState({
      x,
      y: parseFloat(this.props.route.calcX(x).toFixed(2)),
      editing: true,
    });
  }

  onChangedY = (val) => {
    const y = !Number.isNaN(val) ? val : 0;
    this.setState({
      y,
      x: parseFloat(this.props.route.calcY(y).toFixed(2)),
      editing: true,
    });
  }

  reset = () => {
    Keyboard.dismiss();
    this.setState({
      x: this.props.route.placeholderX || 0,
      y: this.props.route.placeholderY || 0,
      editing: false,
    });
  }

  cancel = () => {
    Keyboard.dismiss();
    this.setState({ editing: false });
  }

  renderActionBar() {
    const { route } = this.props;
    const { editing } = this.state;
    return (
      <View style={styles.actions_container}>
        <ActionButton
          label="Reset"
          onPress={this.reset}
          theme={route.theme.main_button}
        />
        {editing && (
          <ActionButton
            label="Cancel"
            onPress={this.cancel}
            theme={route.theme.cancel_button}
          />
        )}
      </View>
    );
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
            onChange={this.onChangedX}
            theme={route.theme}
          />
        </View>
        <View style={[styles.half_container, route.theme.bottom_half]}>
          <ConversionUnit
            label={route.labelY}
            value={`${this.state.y}`}
            placeholder={route.placeholderY}
            onChange={this.onChangedY}
            theme={route.theme}
          />
        </View>
        {this.renderActionBar()}
        <ConversionKeyboard
          onKeyPressed={() => {}}
          onActionPressed={() => {}}
          hasNegativeButton={route.allowNegatives}
          theme={route.theme}
        />
      </KeyboardAvoidingView>
    );
  }
}
