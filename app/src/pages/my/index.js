import React, { Component } from 'react'
import { WhiteSpace, List } from 'antd-mobile';
import { connect } from 'dva';
import { Header, MenuBar } from './_components';
import Link from 'umi/link';
import styles from './index.less';

const Item = List.Item;

@connect(({user}) => ({
  user: user.user,
}))
class User extends Component {

  logout = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'user/logout'
    });
  }

  render() {
    const {user} = this.props;
    console.log('user', this.props);
    return (
      <div className={styles.my}>
        <div className={styles.myHeader}>
          {
            user ? <Header user={user} /> : <div className={styles.myHeaderLogin}><Link to='/login'>登录</Link></div>
          }
        </div>
        <WhiteSpace style={{background: '#f2f6f9'}} size='sm' />
        <MenuBar />
        <WhiteSpace style={{background: '#f4f5f7'}} size='sm' />
        <List>
          <Item arrow='horizontal'>我的关注</Item>
          <Item arrow='horizontal'>消息通知</Item>
          <Item arrow='horizontal' extra='今日阅读12分钟'>阅读公益</Item>
        </List>
        <WhiteSpace style={{background: '#f2f6f9'}} size='sm' />
        <List>
          <Item arrow='horizontal' extra='手机充值'>我的钱包</Item>
          <Item arrow='horizontal' extra='免费领取流量福利'>免流量专区</Item>
        </List>
        <WhiteSpace style={{background: '#f1f5f8'}} size='sm' />
        <List>
          <Item arrow='horizontal'>用户反馈</Item>
          <Item arrow='horizontal' onClick={this.logout}>退出系统</Item>
        </List>
      </div>
    )
  }
}

export default User;
