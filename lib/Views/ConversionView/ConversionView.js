/**
 * @providesModule ConversionView
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  LayoutAnimation,
} from 'react-native';

import type { RouteType } from 'AppTypes';
import ActionButton from 'ActionButton';
import ConversionUnit from 'ConversionUnit';
import ConversionKeyboard from 'ConversionKeyboard';

import { appendToValue } from 'Helpers';

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
      dirty: false,
      x: props.route.placeholderX || 0,
      y: props.route.placeholderY || 0,
      currentlyEditedValue: null,
      editing: false,
    };
  }

  onPressValue = (value: 'x' | 'y'): void => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({
      currentlyEditedValue: value,
      editing: true,
    });
  }

  onKeyPressed = (value: String): void => {
    const { x, y, dirty } = this.state;
    if (this.state.currentlyEditedValue === 'x') {
      this.onChangedX(appendToValue((dirty ? x : 0), value, MAX_NUMBER_LENGTH));
    } else {
      this.onChangedY(appendToValue((dirty ? y : 0), value, MAX_NUMBER_LENGTH));
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
      y: x === '.' || x === '-'
        ? parseFloat(this.props.route.calcX(0).toFixed(2))
        : parseFloat(this.props.route.calcX(x).toFixed(2)),
      dirty: true,
      editing: true,
    });
  }

  onChangedY = (val) => {
    const y = !Number.isNaN(val) ? val : 0;
    this.setState({
      y,
      x: y === '.' || y === '-'
        ? parseFloat(this.props.route.calcY(0).toFixed(2))
        : parseFloat(this.props.route.calcY(y).toFixed(2)),
      dirty: true,
      editing: true,
    });
  }

  reset = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({
      x: this.props.route.placeholderX || 0,
      y: this.props.route.placeholderY || 0,
      editing: false,
      dirty: false,
      currentlyEditedValue: null,
    });
  }

  cancel = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({
      editing: false,
      currentlyEditedValue: null,
    });
  }

  renderActionBar() {
    const { route } = this.props;
    const { editing } = this.state;
    return (
      <View style={[styles.actions_container, route.theme.bottom_half]}>
        <ActionButton
          label="Reset"
          onPress={this.reset}
          theme={route.theme.action_button}
        />
        {editing && (
          <ActionButton
            label="Cancel"
            onPress={this.cancel}
            theme={route.theme.action_button}
          />
        )}
        {editing && (
          <ActionButton
            label="Delete"
            onPress={this.delete}
            theme={route.theme.action_button}
          />
        )}
      </View>
    );
  }

  render() {
    const { route } = this.props;
    const { editing, currentlyEditedValue, dirty } = this.state;
    return (
      <View style={[styles.wrapper, route.theme.bottom_half]}>
        <View style={[styles.half_container, route.theme.top_half]}>
          <ConversionUnit
            label={route.labelX}
            value={`${this.state.x}` || '0'}
            onPress={this.onPressX}
            theme={route.theme}
            active={currentlyEditedValue === 'x'}
            placeholder={!dirty}
          />
        </View>
        <View style={[styles.half_container, route.theme.bottom_half]}>
          <ConversionUnit
            label={route.labelY}
            value={`${this.state.y}` || '0'}
            onPress={this.onPressY}
            theme={route.theme}
            active={currentlyEditedValue === 'y'}
            placeholder={!dirty}
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  half_container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  actions_container: {
    flex: 1,
    maxHeight: 50,
    flexDirection: 'row',
  },
});
