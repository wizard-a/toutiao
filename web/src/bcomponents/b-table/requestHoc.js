import React, { Component } from 'react';
// import { Table } from 'antd';
import request from 'utils/request';
import { stringify as qsStringify } from 'qs';

export default () => (WrappedComponent) => class requestHoc extends WrappedComponent {
  // static displayName = 'ss';

  constructor() {
    super();
    this.page = {
      search: '',
      pageIndex: 1,
      pageNum: 10,
      orderName: 'createTime',
      orderBy: 'desc',
    }

    this.state = {
      data: [],
      total: 0,
    }

  }

  componentDidMount = () => {
    this.getData();
  }

  componentWillReceiveProps = (nextProps) => {
    // console.log('getDerivedStateFromProps', nextProps.search);
    // console.log(' this.page.search', (nextProps.search !== ''), (this.page.search, nextProps.search === '' && this.page.search !== ''))
    if (nextProps.search === undefined || nextProps.search === null) {
      return null;
    }
    if ((nextProps.search !== '') || (nextProps.search === '' && this.page.search !== '')) {
      console.log('exec');
      this.page.search = nextProps.search;
      this.getData();
      return null;
    }
  }

  onPageChange = (page, pageSize) => {
    this.page.pageIndex = page;
    this.page.pageNum = pageSize;
    this.getData();
  }

  onShowSizeChange = (page, pageSize) => {
    this.page.pageIndex = 1;
    this.page.pageNum = pageSize;
    this.getData();
  }

  onSearch = () => {
    this.props.search('');
  }

  /**
   * 异步获取列表数据
   */
  getData = () => {
    const { url } = this.props;
    const requestUrl = `${url}?${qsStringify(this.page)}`
    request.get(requestUrl).then(res => {
      console.log('res', res);
      this.setState({
        data: res.rows,
        total: res.count,
      });
    });
  }
}
