import React from 'react';
import { BTable } from 'bcomponents';
import { Row, Col, Button } from 'antd';
import router from 'umi/router';
import { ListTable } from './_components';

const Search = BTable.Search;

@BTable.tableEffectHoc({
  url: '/api/v1/news',
  BTable: ListTable,
})

class Index extends React.Component {

  create = () => {
    router.push('list/create');
  }

  render() {
    const {getData} = this.props;
    return (
      <React.Fragment>
        <Row justify='space-between' style={{ marginBottom: '20px' }}>
          <Col span={12}>
            <Search
              getData={getData}
            />
          </Col>
          <Col style={{textAlign: 'right'}} span={12}>
            <Button
              type='primary'
              onClick={this.create}
            >新建</Button>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Index;
