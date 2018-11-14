

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import withRouter from 'umi/withRouter';
import pathToRegexp from 'path-to-regexp';
import { Breadcrumb } from 'antd';
import Link from 'umi/link';
// import Ellipsis from 'ant-design-pro/lib/Ellipsis';
import breadData from './config';

const queryArray = (menu, pid) => {
  return menu.find(item => item.id === pid);
};

const getRoute = (route, params) => {
  const toPathRegexp = pathToRegexp.compile(route);
  return toPathRegexp(params);
};

@withRouter
@connect(({ global }) => ({ breadMapData: global.breadMapData }))
class Bread extends Component {
  static defaultProps = {
    style: {},
  }

  getName = (name) => {
    const { breadMapData } = this.props;
    const reg = /^\{.*\}$/;
    if (reg.test(name)) {
      // console.log(breadMapData, JSON.stringify(breadMapData));
      name = name.replace('{', '').replace('}', '');
      return breadMapData[name];
    }
    return name.toString();
  }

  render() {
    const { location, style } = this.props;
    const pathArray = [];

    const getPathArray = (item) => {
      if (!item) {
        return;
      }
      pathArray.unshift(item);
      if (item.pid) {
        getPathArray(queryArray(breadData, item.pid));
      }
    };

    const path = location.pathname;
    let current = null;
    const params = {};

    for (let i = 0; i < breadData.length; i++) {
      const item = breadData[i];
      const pathRegexp = pathToRegexp(item.route).exec(path);
      if (pathRegexp) {
        let paths = pathToRegexp.parse(item.route);
        paths = paths.filter((f) => {
          return typeof f === 'object';
        });
        paths.forEach((p, index) => {
          params[p.name] = pathRegexp[index + 1];
        });
        current = item;
        break;
      }
    }

    getPathArray(current);
    // console.log('pathArray', pathArray);
    const breadcrumbList = pathArray.map(item => {
      return (
        <Breadcrumb.Item key={item.route}>
          {
            item.noLink ? this.getName(item.name)
              : (<Link to={getRoute(item.route, params)}>
                  {this.getName(item.name)}
                  {/* <Ellipsis length={16} tooltip>
                  </Ellipsis> */}
                </Link>)
          }
        </Breadcrumb.Item>
      );
    });
    return (
      <Breadcrumb style={style} separator=">">
        {breadcrumbList}
      </Breadcrumb>
    );
  }
}

Bread.propTypes = {
  style: PropTypes.object,
};

export default Bread;
