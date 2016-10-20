'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Stepper from '../src/index.js';

let App = React.createClass({
  render() {
    const steps = ['Step One', 'Step Two', 'Step Three'];
    return (
      <div style={ { background: '#424242', height: 200 } }>
        <Stepper steps={ steps } activeStep={ 1 } />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('content'));
