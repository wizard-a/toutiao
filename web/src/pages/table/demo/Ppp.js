import React, { Component } from 'react';
import { Table, Input, Button, Icon, Popover } from 'antd';

class Ppp extends Component {
  render() {
    const restProp = {
      ...this.props,
      title: this.props.ttt,
    }
    return (
      <Popover {...restProp} />
    )
  }
}


export default Ppp;
