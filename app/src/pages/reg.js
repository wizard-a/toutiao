import React, { Component } from 'react';
import { connect } from 'dva';
import {Flex, InputItem, Button, NavBar, Icon, Toast } from 'antd-mobile';
import Link from 'umi/link';
import { createForm } from 'rc-form';
import formValid from 'utils/formValid';
import styles from './reg.less';
console.log('connect', connect);

@createForm()
@connect(({ workflowIndex }) => ({ ...workflowIndex }))
// @connect(({user}) => ({
//   regLoading: user.regLoading,
// }))
class Reg extends Component {


  reg = () => {
    const {form, dispatch} = this.props;
    form.validateFields((error, value) => {
      if (error) {
        return;
      }
      value.account = value.account.replace(/ /g, '');
      dispatch({type: 'user/reg', payload: value});
      console.log('value', value);
    });
  }

  render() {
    const {form: {getFieldProps, getFieldError}, regLoading} = this.props;
    const errFormObj = getFieldError(['account', 'password']) || {};
    const isDisable = Object.keys(errFormObj)
                      .some(s => errFormObj[s] !== undefined)
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
                <InputItem
                  {...getFieldProps('account', {
                    initialValue: '183 1104 6191',
                    rules: [
                      formValid.require('请输入手机号'),
                      formValid.phone(),
                    ],
                  })}
                  clear
                  error={!!getFieldError('account')}
                  onErrorClick={() => {
                    const err = getFieldError('account').join('、');
                    Toast.info(err, 1);
                  }}
                  className='form-item-phone'
                  type='phone'
                  placeholder='手机号' />
                <span className='form-item-line' />
                <span className='code'>发送验证码</span>
              </Flex>
            </div>
            <div className='form-item form-item-input'>
              <InputItem
                {...getFieldProps('password', {
                  initialValue: '123456',
                  rules: [
                    formValid.require('请输入验证码'),
                    formValid.verifyCode(),
                  ],
                })}
                clear
                error={!!getFieldError('password')}
                onErrorClick={() => {
                  const err = getFieldError('password').join('、');
                  Toast.info(err, 1);
                }}
                placeholder='请输入验证码'
              />
            </div>
            <div className='form-item form-item-button'>
              <Button
                activeStyle={false}
                type='warning'
                disabled={isDisable}
                onClick={this.reg}
                loading={regLoading}
              >注册</Button>
            </div>
            <Link to="/login" className='form-item-a'>免密码登录</Link>
          </Flex>
        </div>
      </div>
    )
  }
}

export default Reg;
