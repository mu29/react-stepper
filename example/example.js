'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Stepper from '../src/index.js';

let App = React.createClass({
  render() {
    const steps = ['Step One', 'Step Two', 'Step Three', 'Step Four'];
    return (
      <div style={ { height: 200, width: 600 } }>
        <Stepper steps={ steps } activeStep={ 1 } />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('content'));
