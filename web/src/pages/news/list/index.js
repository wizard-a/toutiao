import React from 'react';
import { Button } from 'antd';
import router from 'umi/router';

class List extends React.Component {

  create = () => {
    router.push('list/create');
  }

  render() {
    return (
      <div>
        <Button onClick={this.create}>
          新建
        </Button>
        News List
      </div>
    );
  }
}

export default List;
