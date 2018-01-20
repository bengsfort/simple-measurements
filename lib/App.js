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
      route: Routes[1],
    };
  }

  render() {
    const { route } = this.state;
    return (
      <ConversionView route={route} />
    );
  }
}
