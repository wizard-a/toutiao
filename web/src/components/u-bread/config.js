
export default [
  {
    id: 1,
    name: '概览',
    route: '/dashboard',
    noLink: true,
  },
  {
    id: 2,
    name: '文章管理',
    route: '/news',
    noLink: true,
  },
  {
    id: 21,
    pid: 2,
    name: '内容管理',
    route: '/news/list',
  },
  {
    id: 211,
    pid: 21,
    name: '添加新闻',
    route: '/news/list/create',
  },
  {
    id: 22,
    pid: 2,
    name: '评论管理',
    route: '/news/comment',
  },
  {
    id: 4,
    name: '系统管理',
    route: '/system',
    noLink: true,
  },
  {
    id: 41,
    pid: 4,
    name: '用户管理',
    route: '/system/user',
  },
  {
    id: 42,
    pid: 4,
    name: '渠道管理',
    route: '/system/channel',
  }
]
