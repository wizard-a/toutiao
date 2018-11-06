import React, { Component } from 'react'
import Link from 'umi/link';

class User extends Component {
  render() {
    return (
      <div>
        User
        <Link to='/login'>登录</Link>
      </div>
    )
  }
}

export default User;
