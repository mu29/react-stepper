import React, { Component, PropTypes } from 'react';

export default class Step extends Component {
  constructor() {
    super();
    this.getStyles = this.getStyles.bind(this);
  }

  getStyles() {
    const {
      activeColor, completeColor, defaultColor,
      size, circleFontSize, fontSize,
      circleTop, titleTop, width,
    } = this.props;

    return {
      step: {
        width: `${width}%`,
        display: 'table-cell',
        position: 'relative',
        paddingTop: circleTop,
      },
      circle: {
        width: size,
        height: size,
        margin: '0 auto',
        backgroundColor: defaultColor,
        borderRadius: '50%',
        textAlign: 'center',
        padding: 1,
        fontSize: circleFontSize,
        color: '#424242',
        display: 'block',
      },
      activeCircle: {
        backgroundColor: activeColor,
      },
      completedCircle: {
        backgroundColor: completeColor,
      },
      index: {
        lineHeight: `${size + circleFontSize / 4}px`,
      },
      title: {
        marginTop: titleTop,
        fontSize: fontSize,
        fontWeight: '300',
        textAlign: 'center',
        color: defaultColor,
      },
      activeTitle: {
        color: activeColor,
      },
      completedTitle: {
        color: completeColor,
      },
      leftBar: {
        position: 'absolute',
        top: circleTop + size / 2,
        height: 1,
        borderTopStyle: 'solid',
        borderTopWidth: 1,
        borderTopColor: defaultColor,
        left: 0,
        right: '50%',
        marginRight: size / 2 + 1,
      },
      rightBar: {
        position: 'absolute',
        top: circleTop + size / 2,
        height: 1,
        borderTopStyle: 'solid',
        borderTopWidth: 1,
        borderTopColor: defaultColor,
        right: 0,
        left: '50%',
        marginLeft: size / 2 + 1,
      },
      completedBar: {
        borderTopStyle: 'solid',
        borderTopWidth: 1,
        borderTopColor: completeColor,
      },
    };
  }

  render() {
    const { title, index, active, completed, first, last } = this.props;
    const styles = this.getStyles();
    const circleStyle = Object.assign(
      styles.circle,
      completed ? styles.completedCircle : {},
      active ? styles.activeCircle : {},
    );
    const titleStyle = Object.assign(
      styles.title,
      completed ? styles.completedTitle : {},
      active ? styles.activetitle : {},
    );
    const leftStyle = Object.assign(styles.leftBar, (active || completed) ? styles.completedBar : {});
    const rightStyle = Object.assign(styles.rightBar, completed ? styles.completedBar : {});

    return (
      <div style={ styles.step }>
        <div style={ circleStyle }>
          <span style={ styles.index }>{ index + 1 }</span>
        </div>
        <div style={ titleStyle }>{ title }</div>
        { !first && <div style={ leftStyle }></div> }
        { !last && <div style={ rightStyle }></div> }
      </div>
    );
  }
}

Step.defaultProps = {
  activeColor: '#FFF',
  completeColor: '#FFF',
  defaultColor: '#757575',
  size: 32,
  circleFontSize: 16,
  fontSize: 16,
  circleTop: 24,
  titleTop: 8,
};

Step.propTypes = {
  width: PropTypes.number.isRequired,
  activeColor: PropTypes.string,
  completeColor: PropTypes.string,
  defaultColor: PropTypes.string,
  size: PropTypes.number,
  circleFontSize: PropTypes.number,
  fontSize: PropTypes.number,
  circleTop: PropTypes.number,
  titleTop: PropTypes.number,
  title: PropTypes.string,
  index: PropTypes.number,
  active: PropTypes.boolean,
  completed: PropTypes.boolean,
  first: PropTypes.boolean,
  last: PropTypes.boolean,
};
