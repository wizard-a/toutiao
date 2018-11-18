import React from 'react';
import { Button, Input, Row, Col, Table } from 'antd';
import { BTable } from 'bcomponents';

const Search = Input.Search;

class Channel extends React.Component {

  state = {
    search: ''
  }

  render() {
    const columns = [{
      title: 'id',
      dataIndex: '_id',
      key: '_id',
    }, {
      title: '渠道',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
    }];

    const { search } = this.state;
    return (
      <div>
        <Row justify='space-between'>
          <Col span={12}>
            <Search
              style={{width: 300}}
              placeholder="请输入关键字"
              enterButton
              onSearch={value => this.setState({search: value})}
            />
          </Col>
          <Col style={{textAlign: 'right'}} span={12}>
            <Button
              type='primary'
              onClick={this.create}
            >新建</Button>
          </Col>
        </Row>
        <BTable
          columns={columns}
          url='/api/v1/channel'
          search={search}
          rowSelection={{
            onChange: (selectedRowKeys, selectedRows) => {
              console.log('selectedRowKeys, selectedRows', selectedRowKeys, selectedRows);
            }
          }}
        />
      </div>
    );
  }
}

export default Channel;
