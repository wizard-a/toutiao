import React from 'react';
import {Divider, Form, Input, Icon} from 'antd';
import { BTable } from 'bcomponents';
import layoutConfig from 'config/layoutConfig';
import formValid from 'utils/FormValid';
import styles from '../index.less';

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
    const columns = [{
      title: ' ',
      dataIndex: 'coverImg',
      key: 'coverImg',
      render: (text) => {
        console.log('text', text);
        const url = text.length > 0 ? text[0] : null;
        if (url) {
          return <img alt='缩略图' className={styles.listThumb} src={`/api/news/${url.path}`} />
        }
        return <div className={styles.listThumbNo}><Icon type='file-exclamation' /></div>

      }
    }, {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    }, {
      title: '评论数量',
      dataIndex: 'commentCount',
      key: 'commentCount',
      sorter: true,
    }, {
      title: '阅读量',
      dataIndex: 'readCount',
      key: 'readCount',
      sorter: true,
    }, {
      title: '创建人',
      dataIndex: 'createUser',
      key: 'createUser',
      render: (text) => {
        return text && text.userName;
      }
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
