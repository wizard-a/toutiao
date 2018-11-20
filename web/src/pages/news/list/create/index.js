import React, { Component } from 'react';
import { Form, Input, Upload, Icon, Button } from 'antd';
import { UImageUpload, UBraftEditor } from 'components';
import { connect } from 'dva';
import formValid from 'utils/FormValid';
import router from 'umi/router';
import layoutConfig from 'config/layoutConfig';
import styles from './index.less';

const formItemLayout = layoutConfig.form.large;
const FormItem = Form.Item;


const submitFormLayout = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 6, offset: 4 },
  },
};

@connect()
@Form.create()
class Create extends Component {

  state = {
  }

  submit = (status) => {
    const {form: {validateFieldsAndScroll}, dispatch } = this.props;
    console.log(this.props);
    validateFieldsAndScroll({}, (err, values) => {
      if (err) {
        return;
      }
      if (status) {
        values.status = 2; // 状态为2会放到草稿箱
      }
      dispatch({
        type: 'news/add',
        payload: values,
      });
    });
  }

  goBack = () => {
    router.push('/news/list');
  }

  render() {
    const { form: {getFieldDecorator}} = this.props;

    return (
      <div>
        <Form>
          <FormItem
            {...formItemLayout}
            label='标题'
          >
              {getFieldDecorator('title', {
                rules: [
                  formValid.require('请输入标题'),
                  formValid.name('标题不能超过32个字符')
                ],
              })(
                <Input placeholder='请输入标题' />
              )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label='内容'
          >
              {getFieldDecorator('content', {
                // validateTrigger: 'onBlur',
                rules: [
                  formValid.require('请输入内容'),
                ],
              })(
                <UBraftEditor />
              )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label='封面'
          >
              {getFieldDecorator('coverImg', {
                rules: [
                  formValid.require('请上传封面图'),
                ],
              })(
                <UImageUpload
                  accept='image/*'
                  action='/api/v1/news/upload'
                />
              )}
          </FormItem>
          <FormItem
            // className={styles.createBtn}
            {...submitFormLayout}
          >
              <Button type='primary' onClick={this.submit}>
                发表
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={() => { this.submit(2); }}>
                存为草稿
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={ this.goBack }>
                返回
              </Button>
            </FormItem>
        </Form>
      </div>
    )
  }
}

export default Create;
