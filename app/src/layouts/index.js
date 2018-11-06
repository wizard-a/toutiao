import React, { Component } from 'react'
import BaseLayout from './baseLayout';

const ULR_NO_LAYOUT = ['/login', '/reg'];

class Index extends Component {
  componentDidMount() {
  }

  /**
   * 渲染 body
   */
  renderBody = () => {
    const {location: {pathname}, children } = this.props;
    if (ULR_NO_LAYOUT.includes(pathname)) {
      return  <React.Fragment>
        {children}
      </React.Fragment>;
    }
    return (
      (<BaseLayout {...this.props} />)
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.renderBody()}
      </React.Fragment>
    )
  }
}

export default Index;
