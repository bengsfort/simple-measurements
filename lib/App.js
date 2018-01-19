/**
 * @providesModule App
 * @flow
 */

import React, { Component } from 'react';

import Routes from 'Routes';
import ConversionView from 'ConversionView';

export default class App extends Component {
  constructor(args) {
    super(args);
    this.state = {
      editing: false,
    };
  }

  render() {
    console.log('~~~~~~~', this.state.editing);
    return (
      <ConversionView route={Routes[1]} />
    );
  }
}
