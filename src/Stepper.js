import React, { PropTypes } from 'react';

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
  activeStep, steps,
  activeColor, completeColor, defaultColor, circleFontColor,
  activeTitleColor, completeTitleColor, defaultTitleColor,
  size, circleFontSize, titleFontSize,
  circleTop, titleTop, completeOpcaity, activeOpacity, defaultOpcaity,
  completeTitleOpacity, activeTitleOpacity, defaultTitleOpacity
}) {
  return (
    <div style={ styles.root }>
      <div style={ styles.stepper }>
        { steps.map((step, index) => (
          <Step
            key={index}
            width={100 / steps.length}
            title={step.title}
            href={step.href}
            onClick={step.onClick}
            active={index === activeStep}
            completed={index < activeStep}
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
            defaultOpcaity={defaultOpcaity}
            completeOpcaity={completeOpcaity}
            activeOpacity={activeOpacity}
            defaultTitleOpacity={defaultTitleOpacity}
            completeTitleOpacity={completeTitleOpacity}
            activeTitleOpacity={activeTitleOpacity}

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
};

export default Stepper;
