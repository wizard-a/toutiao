import React from 'react'
import { Grid, Icon } from 'antd-mobile';
import { TIcon } from 'components';
import styles from './index.less';

const iconStyle = {
  fontSize: '20px'
}

const gridData = [
  {
    icon: (<TIcon style={iconStyle} type='icon-favorfill' color='#fdb261' />),
    text: '我的收藏'
  },
  {
    icon: (<TIcon style={iconStyle} type='icon-commentfill' color='#50a3f1' />),
    text: '我的评论'
  },
  {
    icon: (<TIcon style={iconStyle} type='icon-appreciate' color='#f47f53' />),
    text: '我的点赞'
  },
  {
    icon: (<TIcon style={iconStyle} type='icon-timefill' color='#24b596' />),
    text: '浏览历史'
  }
]



function MenuBar ({props}) {
  return <div className={styles.menuBar}>
    <Grid
      data={gridData}
      activeStyle={false}
      hasLine={false}
      square={false}
    />
  </div>
}

export default MenuBar;
