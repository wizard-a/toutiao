import React from 'react';
import { TabBar, Icon } from 'antd-mobile';
import router from 'umi/router';
import iconObj from 'assets';
import 'antd-mobile/dist/antd-mobile.css';
import styles from './baseLayout.less';

/**
 * TabBar 菜单数据
 */
const TabBarData = [
  {
    id: 'home',
    name: '首页',
    icon: 'home',
    url: '/home',
  },
  {
    id: 'video',
    name: '视频',
    icon: 'video',
    url: '/video',
  },
  {
    id: 'message',
    name: '微头条',
    icon: 'message',
    url: '/message',
  },
  {
    id: 'my',
    name: '我的',
    icon: 'my',
    url: '/my',
  }
];

class BaseLayout extends React.Component {

  isTabBarSelect = (url) => {
    const {location: {pathname}} = this.props;
    return pathname === url;
  }

  render() {
    return (
      <div className={styles.baseLayout}>
       <TabBar
          unselectedTintColor="#333"
          tintColor="#ef5f55"
          barTintColor="white"
          tabBarPosition='bottom'
        >
          {
            TabBarData.map(t => (
              <TabBar.Item
                title={t.name}
                key={t.id}
                icon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${iconObj[t.icon]}) center center /  21px 21px no-repeat` }}
                />
                }
                selectedIcon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${iconObj[`${t.icon}Fill`]}) center center /  21px 21px no-repeat` }}
                />
                }
                // badge={1}
                onPress={() => {
                  router.push(t.url);
                }}
                selected={this.isTabBarSelect(t.url)}
                data-seed="logId"
              >
                {this.props.children}
              </TabBar.Item>
            ))
          }
        </TabBar>
      </div>
    );
  }
}

export default BaseLayout;
