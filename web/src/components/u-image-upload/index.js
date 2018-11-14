import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Upload, Icon, Modal } from 'antd';

function handleFiles(fileList) {
  if (fileList && Array.isArray(fileList)) {
    const res = [];
    fileList.forEach(f => {
      const {response} = f;
      if (response && response.code === 0) {
        res.push({
          path: response.data.path,
        });
      }
    })
    return res;
  }
  return [];
}

class UImageUpload extends Component {
  state = {
    fileList: [],
    previewImage: '',
    previewVisible: false,
  }

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({ fileList }) => {
    const {onChange} = this.props;
    this.setState({ fileList })
    // console.log('fileList', fileList);
    const list = handleFiles(fileList);
    // console.log('list', list);
    onChange && onChange(list);
  }

  render() {
    const {fileList, previewVisible, previewImage} = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">上传</div>
      </div>
    );
    return (
      <React.Fragment>
        <Upload
          name='file'
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          {...this.props}
          onChange={this.handleChange}
        >
          {fileList.length >= 3 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </React.Fragment>
    )
  }
}

UImageUpload.propTypes = {
  action: PropTypes.string.isRequired,
}

export default UImageUpload;
