import React, { Component } from 'react';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';

let time = null;

class UBraftEditor extends Component {

  state = {
    editorState: null,
  }

  handleEditorChange = (editorState) => {
    const {onChange} = this.props;
    // console.log('ssss-handleEditorChange');
    this.setState({ editorState });
    // 处理防抖
    if (time !== null) {
      clearTimeout();
    }
    time = setTimeout(() => {
      let value = editorState.toHTML();
      value = value === '<p></p>' ? '' : value;
      onChange && onChange(value);
    }, 200)
  }

  render() {
    const {editorState} = this.state;
    return (
      <BraftEditor
        value={editorState}
        onChange={this.handleEditorChange}
      />
    )
  }
}

export default UBraftEditor;
