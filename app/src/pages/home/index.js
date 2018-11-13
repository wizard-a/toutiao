import React, { Component } from 'react'
import styles from './index.less';
class Home extends Component {

  componentDidMount() {
    console.log('render');
  }

  render() {
    return (
      <div>
        Home
      </div>
    )
  }
}


export default Home;
