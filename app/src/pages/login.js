import React, { Component } from 'react'
import {Flex, InputItem, NavBar, Icon, Button } from 'antd-mobile';
import Link from 'umi/link';
import styles from './login.less';

class Login extends Component {
  render() {
    return (
    <div className='login-bg'>
      <NavBar
        className={styles.loginBar}
        mode="light"
        rightContent={[
          <Link key='0' to='/my'><Icon size='md' type="cross" color='#525252' /></Link>,
        ]}
      />
      <div className={styles.login}>
        <Flex justify='center' className={styles.loginTitle}>登录你的头条，精彩永不丢失</Flex>
        <Flex direction='column'>
          <div className='form-item form-item-input'>
            <Flex>
              <InputItem className='form-item-phone' type='phone' placeholder='手机号' />
              <span className='form-item-line' />
              <span className='code'>发送验证码</span>
            </Flex>
          </div>
          <div className='form-item form-item-input'>
            <InputItem placeholder='请输入验证码' />
          </div>
          <div className='form-item form-item-button'>
            <Button activeStyle={false} type='warning' disabled>进入头条</Button>
          </div>
          <Link to="/reg" className='form-item-a'>账号注册</Link>
        </Flex>
      </div>
    </div>
    )
  }
}


export default Login;
