'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Stepper from '../src/index.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      steps: ['Step One', 'Step Two', 'Step Three', 'Step Four'],
      currentStep: 0,
    };
    this.onClickNext = this.onClickNext.bind(this);
  }

  onClickNext() {
    const { steps, currentStep } = this.state;
    this.setState({
      steps: steps.map((s, i) => (i == currentStep ? `${s} Completed` : s)),
      currentStep: currentStep + 1,
    });
  }

  render() {
    const { steps, currentStep } = this.state;
    const buttonStyle = { background: '#E0E0E0', width: 200, padding: 16, textAlign: 'center', margin: '0 auto', marginTop: 32 };

    return (
      <div>
        <Stepper steps={ steps } activeStep={ currentStep } />
        <div style={ buttonStyle } onClick={ this.onClickNext }>Next</div>
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('content'));
