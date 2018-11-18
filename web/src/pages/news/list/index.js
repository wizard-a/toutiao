import React from 'react';
import { Button, Input, Row, Col } from 'antd';
import router from 'umi/router';

const Search = Input.Search;

class List extends React.Component {

  create = () => {
    router.push('list/create');
  }

  render() {
    return (
      <div>
        <Row justify='space-between'>
          <Col span={12}>
            <Search
              style={{width: 300}}
              placeholder="请输入关键字"
              enterButton
              onSearch={value => console.log(value)}
            />
          </Col>
          <Col style={{textAlign: 'right'}} span={12}>
            <Button
              type='primary'
              onClick={this.create}
            >新建</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default List;
