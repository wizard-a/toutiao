const adminMenu = [
  {
    id: 1,
    name: '概览',
    enName: 'Dashboard',
    icon: 'dashboard',
    url: '/dashboard',
  },
  {
    id: 2,
    name: '文章管理',
    enName: 'news',
    icon: 'table',
    url: '/news',
    children: [{
      id: 21,
      pid: 2,
      name: '内容管理',
      enName: 'Content Manager',
      url: '/news/list',
    }, {
      id: 22,
      pid: 2,
      name: '评论管理',
      enName: 'Comment Manager',
      url: '/news/comment',
    }],
  },
  {
    id: 3,
    name: '图表',
    enName: 'chart',
    icon: 'bar-chart',
    url: '/chart',
  },
  {
    id: 4,
    name: '系统管理',
    enName: 'System',
    icon: 'setting',
    url: '/system',
    children: [
      {
        id: 41,
        pid: 4,
        name: '用户管理',
        enName: 'User',
        url: '/system/user',
      },
      {
        id: 42,
        pid: 4,
        name: '渠道管理',
        enName: 'Channel',
        url: '/system/channel',
      }
    ]
  },
];

export default adminMenu;
