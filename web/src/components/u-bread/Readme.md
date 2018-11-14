---
category: Components
title: 用于需要面包屑的地方
---

## 何时使用

产品中需要使用面包屑

## 用法

1. 按层级去配置 config.js.  id 和 pid 区分子父级关系
```
 [
  {
    id: 1,
    name: '文章管理',
    route: '/project',
  },
  {
    id: 11,
    pid: 1,
    name: '内容管理',
    route: '/project/:pid/main',
  },
  {
    id: 12,
    pid: 11,
    name: '评论管理,
    route: '/project/:pid/workflow',
  },
  {
    id: 13,
    pid: 12,
    name: '{workflowName}',
    route: '/project/:pid/workflow/:wid/:vid',
  },
]
```

2. 把 <Bread> 组件放置到你需要显示的地方
3. 面包屑如果需要动态显示内容，需要配置特殊的占位标记 `{}`
```
  例如： name: '{workflowName}'

  dispath 到全局 store 里
  // 设置面包屑数据
  yield put({
    type: 'global/setBreadMapData',
    payload: { workflowName: '' },
  });
```

4. 如需清除面包屑的key，请调用
  参数 payload 为面包屑的key
```
  // 清除面包屑数据
  dispatch({
    type: 'global/clearBreadMapData',
    payload: { key: 'workflowName' }, // 面包屑key 如: workflowName
  });
```



