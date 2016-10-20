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
        width: '100%',
        minHeight: 0,
        padding: 0,
      },
      stepper: {
        display: 'table',
        width: '100%',
        margin: '0 auto',
      },
    };
  }

  renderStep(index) {
    const {
      activeStep, steps,
      activeColor, completeColor, defaultColor,
      size, circleFontSize, fontSize,
      circleTop, titleTop,
    } = this.props;
    const step = steps[index];

    return React.createElement(Step, {
      width: 100 / steps.length,
      title: step,
      active: index === activeStep,
      completed: index < activeStep,
      first: index === 0,
      last: index === steps.length - 1,
      index,
      activeColor, completeColor, defaultColor,
      size, circleFontSize, fontSize,
      circleTop, titleTop,
    });
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
  activeColor: PropTypes.string,
  completeColor: PropTypes.string,
  defaultColor: PropTypes.string,
  size: PropTypes.number,
  circleFontSize: PropTypes.number,
  fontSize: PropTypes.number,
  circleTop: PropTypes.number,
  titleTop: PropTypes.number,
};
