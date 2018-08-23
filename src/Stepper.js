import React from 'react';
import { PropTypes } from 'prop-types';

import Step from './Step';

const styles = {
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

function Stepper({
  activeStep, steps, disabledSteps,
  activeColor, completeColor, defaultColor, circleFontColor,
  activeTitleColor, completeTitleColor, defaultTitleColor,
  size, circleFontSize, titleFontSize,
  circleTop, titleTop, completeOpacity, activeOpacity, defaultOpacity,
  completeTitleOpacity, activeTitleOpacity, defaultTitleOpacity, barStyle,
  defaultBorderColor, completeBorderColor, activeBorderColor, defaultBorderStyle,
  completeBorderStyle, activeBorderStyle, defaultBarColor, completeBarColor, lineMarginOffset, defaultBorderWidth
}) {
  return (
    <div style={ styles.root }>
      <div style={ styles.stepper }>
        { steps.map((step, index) => (
          <Step
            key={index}
            width={100 / steps.length}
            title={step.title}
            icon={step.icon}
            href={step.href}
            onClick={step.onClick}
            active={!(disabledSteps || []).includes(index) && index === activeStep}
            completed={!(disabledSteps || []).includes(index) && index < activeStep}
            first={index === 0}
            isLast={index === steps.length - 1}
            index={index}
            activeColor={activeColor}
            completeColor={completeColor}
            defaultColor={defaultColor}
            circleFontColor={circleFontColor}
            activeTitleColor={activeTitleColor}
            completeTitleColor={completeTitleColor}
            defaultTitleColor={defaultTitleColor}
            size={size}
            circleFontSize={circleFontSize}
            titleFontSize={titleFontSize}
            circleTop={circleTop}
            titleTop={titleTop}
            defaultOpacity={defaultOpacity}
            completeOpacity={completeOpacity}
            activeOpacity={activeOpacity}
            defaultTitleOpacity={defaultTitleOpacity}
            completeTitleOpacity={completeTitleOpacity}
            activeTitleOpacity={activeTitleOpacity}
            barStyle={barStyle}
            defaultBorderColor={defaultBorderColor}
            completeBorderColor={completeBorderColor}
            activeBorderColor={activeBorderColor}
            defaultBorderStyle={defaultBorderStyle}
            defaultBorderWidth={defaultBorderWidth}
            completeBorderStyle={completeBorderStyle}
            activeBorderStyle={activeBorderStyle}
            defaultBarColor={defaultBarColor}
            completeBarColor={completeBarColor}
            lineMarginOffset={lineMarginOffset}
          />
        )) }
      </div>
    </div>
  );
}

Stepper.defaultProps = {
  activeStep: 0,
};

Stepper.propTypes = {
  activeStep: PropTypes.number,
  steps: PropTypes.array,
  activeColor: PropTypes.string,
  completeColor: PropTypes.string,
  defaultColor: PropTypes.string,
  activeTitleColor: PropTypes.string,
  completeTitleColor: PropTypes.string,
  defaultTitleColor: PropTypes.string,
  circleFontColor: PropTypes.string,
  size: PropTypes.number,
  circleFontSize: PropTypes.number,
  titleFontSize: PropTypes.number,
  circleTop: PropTypes.number,
  titleTop: PropTypes.number,
  defaultOpacity: PropTypes.string,
  completeOpacity: PropTypes.string,
  activeOpacity: PropTypes.string,
  defaultTitleOpacity: PropTypes.string,
  completeTitleOpacity: PropTypes.string,
  activeTitleOpacity: PropTypes.string,
  barStyle: PropTypes.string,
  defaultBarColor: PropTypes.string,
  completeBarColor: PropTypes.string,
  defaultBorderColor: PropTypes.string,
  completeBorderColor: PropTypes.string,
  activeBorderColor: PropTypes.string,
  defaultBorderStyle: PropTypes.string,
  completeBorderStyle: PropTypes.string,
  activeBorderStyle: PropTypes.string,
  lineMarginOffset: PropTypes.number,
  defaultBorderWidth: PropTypes.number
};

export default Stepper;
