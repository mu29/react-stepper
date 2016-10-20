import React, { Component, PropTypes } from 'react';
import Step from './Step';

export default class Stepper extends Component {
  constructor() {
    super();
    this.getStyles = this.getStyles.bind(this);
    this.renderStep = this.renderStep.bind(this);
  }

  getStyles() {
    return {
      root: {
        width: '100%';
        minHeight: 0;
        padding: 0;
      },
      stepper: {
        display: 'table';
        width: '100%';
        margin: 'auto';
      },
    };
  }

  renderStep() {

  }

  render() {
    const { steps } = this.props;
    const styles = this.getStyles();
    return (
      <div style={ styles.root }>
        <div style={ styles.stepper }>
          { steps.map((s, i) => this.renderStep(i)) }
        </div>
      </div>
    );
  }
}

Stepper.propTypes = {
  activeStep: PropTypes.number,
  steps: PropTypes.array,
};
