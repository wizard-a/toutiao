import React from 'react';
import {Divider} from 'antd';
import {BTable} from 'bcomponents';

const columns = [{
  title: 'id',
  dataIndex: '_id',
  key: '_id',
}, {
  title: '渠道',
  dataIndex: 'name',
  key: 'name',
  sorter: true,
}, {
  title: '创建时间',
  dataIndex: 'createTime',
  key: 'createTime',
  sorter: true,
}, {
  title: 'Action',
  dataIndex: 'Action',
  key: 'Action',
  render: (text, record) => (
    <span>
      <a onClick={() => this.edit(record)}>编辑</a>
      <Divider type="vertical" />
      <a onClick={() => this.del(record) }>删除</a>
    </span>
  ),
}]

@BTable.tableEffectHoc({
  url: '/api/v1/channel',
  columns: columns,
})
class User extends React.Component {

  render() {
    return (
      <div>
        User List
      </div>
    );
  }
}

export default User;
