import React from 'react';
import { BTable } from 'bcomponents';
import { Row, Col, Input, Form } from 'antd';
import { ListTable } from './_components';
import formValid from 'utils/FormValid';
import layoutConfig from 'config/layoutConfig';

const Search = BTable.Search;
const Create = BTable.Create;
const FormItem = Form.Item;

const formItemLayout = layoutConfig.form.default;
@BTable.tableEffectHoc({
  url: '/api/v1/channel',
  requestMethod: 'get',
  BTable: ListTable,
})
class Channel extends React.Component {

  render() {
    const {getData} = this.props;
    return (
      <React.Fragment>
        <Row justify='space-between' style={{ marginBottom: '20px' }}>
          <Col span={12}>
            <Search getData={getData} />
          </Col>
          <Col span={12} style={{textAlign: 'right'}}>
            <Create
              url='/api/v1/channel'
              getData={getData}
            >
              {
                ({getFieldDecorator}) => (
                  <React.Fragment>
                    <FormItem {...formItemLayout} label="渠道">
                      {getFieldDecorator('name', {
                        initialValue: '',
                        validateFirst: true,
                        rules: [
                          formValid.require(),
                          formValid.name(),
                          formValid.asyncName('/api/v1/channel/check?name=', null, '渠道已存在'),
                        ],
                      })(
                        <Input placeholder="请输入渠道" />
                      )}
                    </FormItem>
                  </React.Fragment>
                )
              }
            </Create>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Channel;
