import React from 'react';
import {Divider, Form, Input} from 'antd';
import { BTable } from 'bcomponents';
import layoutConfig from 'config/layoutConfig';
import formValid from 'utils/FormValid';

const Update = BTable.Update;
const FormItem = Form.Item;

const formItemLayout = layoutConfig.form.default;

class List extends React.Component {

  state = {
    updateData: null,
    visible: false,
  }

  onUpdate = (data) => {
    this.setState({
      updateData: data,
      visible: true,
    });
  }

  onUpdateCancel = () => {
    this.setState({
      visible: false,
    });
  }

  onDel = (data) => {
    const {getData} = this.props;
    BTable.Del({
      url: `/api/v1/channel/${data._id}`,
      getData,
    })
  }

  render() {
    const { pagination: { current, pageSize } } = this.props;
    const startIndex = (current - 1) * pageSize;
    const columns = [{
      title: '序号',
      dataIndex: '_id',
      key: '_id',
      render: (text, record, index) => {
        return  startIndex + (index + 1);
      }
    }, {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
      sorter: true,
      filterMultiple: false,
      filters: [
        { text: 'test', value: 'test' },
        { text: 'dddd', value: 'dddd' },
      ],
    }, {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
      sorter: true,
    }, {
      title: '操作',
      dataIndex: 'Action',
      key: 'Action',
      render: (text, record) => (
        <span>
          <a onClick={() => this.onUpdate(record)}>编辑</a>
          <Divider type="vertical" />
          <a onClick={() => this.onDel(record) }>删除</a>
        </span>
      ),
    }];

    const {updateData, visible} = this.state;
    return (
      <React.Fragment>
        <BTable
          columns={columns}
          {...this.props}
        />
        {
          updateData && (
            <Update
              visible={visible}
              url={`/api/v1/channel/${updateData._id}`}
              onCancel={this.onUpdateCancel}
              getData={this.props.getData}
            >
              {
                ({getFieldDecorator}) => (
                  <React.Fragment>
                    <FormItem {...formItemLayout} label='渠道'>
                      {getFieldDecorator('name', {
                        initialValue: updateData.name,
                        rules: [
                          formValid.require(),
                          formValid.name(),
                          formValid.asyncName('/api/v1/channel/check?name=', updateData.name, '渠道已存在'),
                        ],
                      })(
                        <Input placeholder="请输入渠道" />
                      )}
                    </FormItem>
                  </React.Fragment>
                )
              }
            </Update>
          )
        }
      </React.Fragment>
    );
  }
}

export default List;
