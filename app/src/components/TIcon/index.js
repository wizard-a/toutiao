

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TIcon extends Component {
  state = {

  }
  render() {
    const {type, color, style } = this.props;
    let iStyle = { ...style};
    if (color) {
      iStyle = {...iStyle, color: color};
    }
    return (
      <svg className="icon" style={iStyle} aria-hidden="true">
        <use xlinkHref={`#${type}`} />
      </svg>
    )
  }
}

TIcon.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
};

export default TIcon;
