import React, { Component } from 'react'
import {Flex, InputItem, Button, NavBar, Icon } from 'antd-mobile';
import Link from 'umi/link';
import styles from './reg.less';

class Reg extends Component {
  render() {
    return (
      <div className='reg-bg'>
        <NavBar
          className={styles.regBar}
          mode="light"
          rightContent={[
            <Link key='0'  to='/my'><Icon size='md' type="cross" color='#525252' /></Link>,
          ]}
        />
        <div className={styles.reg}>
          <Flex justify='center' className={styles.regTitle}>账号注册</Flex>
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
              <Button activeStyle={false} type='warning' disabled>注册</Button>
            </div>
            <Link to="/login" className='form-item-a'>免密码登录</Link>
          </Flex>
        </div>
      </div>
    )
  }
}

export default Reg;
