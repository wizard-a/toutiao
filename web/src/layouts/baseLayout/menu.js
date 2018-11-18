import React from 'react';
import { Menu, Icon } from 'antd';
import router from 'umi/router';

const SubMenu = Menu.SubMenu;

class MenuComponent extends React.Component {

  state = {
    menuOpenKeys: [],
    menuSelectKeys: [],
    isShow: false,
  }

  link = (url) => {
    router.push(url);
  }

  componentDidMount = () => {
    setTimeout(() => {
      const keys = this.getMenuKes();
      this.setState({
        isShow: true,
        menuOpenKeys: keys[0],
        menuSelectKeys: keys[1],
      });
    });
  }


  /**
   * 获取当前选中的menu keys
   */
  getMenuKes = () => {
    // debugger;
    const { menu } = this.props;
    const { pathname } = window.location;
    const keys = [];
    let openKeys = [];
    let selectKeys = [];

    // 获取当前匹配的key
    const getCurrKey = (menu) => {
      menu.forEach(f => {
        if (pathname.indexOf(f.url) !== -1 ) {
          keys.push(f.id.toString());
          f.children && getCurrKey(f.children);
        }
      });
    }
    getCurrKey(menu);
    if (keys.length === 0) {
      selectKeys = ['1'];
    } else {
      openKeys = keys.splice(0, keys.length - 1);
      selectKeys = [keys[keys.length - 1]];
    }

    return [openKeys, selectKeys];
  }

  /**
   * SubMenu 展开/关闭的回调
   */
  onOpenChange = (openKeys) => {
    this.setState({
      menuOpenKeys: openKeys,
    });
  }

  /**
   * 点击 MenuItem 调用此函数
   */
  onClick = ({ item, key, keyPath }) => {
    this.setState({
      menuSelectKeys: [key],
    });
  }

  renderMenu = (data) => {
    const {currLocale} = this.props;
    return data && data.map(d => {
      const name = currLocale === 'zh_CN' ? d.name : d.enName;
      if (d.children && d.children.length > 0) {
        return <SubMenu
          key={d.id}
          title={<span><Icon type={d.icon} /><span>{name}</span></span>}
        >
          {this.renderMenu(d.children)}
        </SubMenu>
      }
      return (
          <Menu.Item
            key={d.id}
            onClick={() => {this.link(d.url)}}
          >
            {d.icon && <Icon type={d.icon} />}
            <span>{name}</span>
        </Menu.Item>
      )
    });
  }

  render() {
    const { menu} = this.props;
    const { menuOpenKeys, menuSelectKeys, isShow} = this.state;
    return (
      <React.Fragment>
        {
          isShow && (<Menu theme='dark'
            openKeys={menuOpenKeys}
            selectedKeys={menuSelectKeys}
            onOpenChange={this.onOpenChange}
            onClick={this.onClick}
            mode='inline'
          >
            {
              this.renderMenu(menu)
            }
          </Menu>)
        }
      </React.Fragment>
    );
  }
}

export default MenuComponent;
