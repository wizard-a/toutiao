import React, { Component } from 'react';
import { Table } from 'antd';
import request from './requestHoc';

@request()
class BasicTable extends Component {

  render() {
    const {data, total} = this.state;
    const {url, ...otherProps} = this.props;
    return (
      <div>
        <Table
          rowKey='_id'
          dataSource={data}
          pagination={{
            current: this.page.pageIndex,
            pageSize: this.page.pageNum,
            total: total,
            showSizeChanger: true,
            onChange: this.onPageChange,
            onShowSizeChange: this.onShowSizeChange
          }}
          {...otherProps}
        />
      </div>
    )
  }
}

export default BasicTable;
