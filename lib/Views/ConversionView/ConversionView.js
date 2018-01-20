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

import type { RouteType } from 'AppTypes';
import ActionButton from 'ActionButton';
import ConversionUnit from 'ConversionUnit';
import ConversionKeyboard from 'ConversionKeyboard';
import styles from 'ConversionViewStyles';

import {
  parseTextValue,
  appendToValue,
} from 'Helpers';

const MAX_NUMBER_LENGTH = 4;

export default class ConversionView extends Component {
  props: {
    route: RouteType;
  };

  constructor(props) {
    super(props);
    this.onPressX = this.onPressValue.bind(this, 'x');
    this.onPressY = this.onPressValue.bind(this, 'y');
    this.delete = this.onActionPressed.bind(this, 'delete');
    this.state = {
      x: props.route.placeholderX || 0,
      y: props.route.placeholderY || 0,
      currentlyEditedValue: null,
      editing: false,
    };
  }

  onPressValue = (value: 'x' | 'y'): void => {
    this.setState({
      currentlyEditedValue: value,
      editing: true,
    });
  }

  onKeyPressed = (value: String): void => {
    const { x, y } = this.state;
    if (this.state.currentlyEditedValue === 'x') {
      this.onChangedX(appendToValue(x, value, MAX_NUMBER_LENGTH));
    } else {
      this.onChangedY(appendToValue(y, value, MAX_NUMBER_LENGTH));
    }
  }

  onActionPressed = (value: string): void => {
    const { x, y } = this.state;
    if (this.state.currentlyEditedValue === 'x') {
      let newX = `${x}`;
      if (value === 'delete') {
        newX = newX.slice(0, newX.length - 1);
      } else if (value === '-') {
        newX = `${x * -1}`;
      } else if (value === '.') {
        newX = newX.length < MAX_NUMBER_LENGTH - 1 && newX.indexOf('.') === -1
          ? `${newX}.`
          : newX;
      }
      this.onChangedX(newX);
    } else {
      let newY = `${y}`;
      if (value === 'delete') {
        newY = newY.slice(0, newY.length - 1);
      } else if (value === '-') {
        newY = `${y * -1}`;
      } else if (value === '.') {
        newY = newY.length < MAX_NUMBER_LENGTH - 1 && newY.indexOf('.') === -1
          ? `${newY}.`
          : newY;
        if (newY === '.') {
          newY = '.';
        }
      }
      this.onChangedY(newY);
    }
  }

  onChangedX = (val: Number) => {
    const x = !Number.isNaN(val) ? val : 0;
    this.setState({
      x,
      y: x === '.'
        ? parseFloat(this.props.route.calcX(0).toFixed(2))
        : parseFloat(this.props.route.calcX(x).toFixed(2)),
      editing: true,
    });
  }

  onChangedY = (val) => {
    const y = !Number.isNaN(val) ? val : 0;
    this.setState({
      y,
      x: y === '.'
        ? parseFloat(this.props.route.calcY(0).toFixed(2))
        : parseFloat(this.props.route.calcY(y).toFixed(2)),
      editing: true,
    });
  }

  reset = () => {
    Keyboard.dismiss();
    this.setState({
      x: this.props.route.placeholderX || 0,
      y: this.props.route.placeholderY || 0,
      editing: false,
      currentlyEditedValue: null,
    });
  }

  cancel = () => {
    this.setState({
      editing: false,
      currentlyEditedValue: null,
    });
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
        {editing && (
          <ActionButton
            label="Delete"
            onPress={this.delete}
            theme={route.theme.cancel_button}
          />
        )}
      </View>
    );
  }

  render() {
    const { route } = this.props;
    const { editing, currentlyEditedValue } = this.state;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
        <View style={[styles.half_container, route.theme.top_half]}>
          <ConversionUnit
            label={route.labelX}
            value={`${this.state.x}` || '0'}
            onPress={this.onPressX}
            theme={route.theme}
            active={currentlyEditedValue === 'x'}
          />
        </View>
        <View style={[styles.half_container, route.theme.bottom_half]}>
          <ConversionUnit
            label={route.labelY}
            value={`${this.state.y}` || '0'}
            onPress={this.onPressY}
            theme={route.theme}
            active={currentlyEditedValue === 'y'}
          />
        </View>
        {this.renderActionBar()}
        {editing && (
          <ConversionKeyboard
            onKeyPressed={this.onKeyPressed}
            onActionPressed={this.onActionPressed}
            hasNegativeButton={route.allowNegatives}
            theme={route.theme}
          />
        )}
      </KeyboardAvoidingView>
    );
  }
}
