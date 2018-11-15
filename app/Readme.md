### 头条APP端

### 启动
1. git clone git@github.com:jiechud/toutiao.git
2. cd app && yarn install
3. `yarn start` 本地启动，访问的代理服务器地址是`http://localhost:3000`， 需要本地启动server项目

   `yarn server` 本地启动，访问的代理服务器地址是`http://39.105.188.65:8080`，不需要本地启动server项目
5. open browser

#### mock 数据
1. 由于`uitls/request.js`对返回的数据做了通用处理，统一处理服务端报错信息。mock数据需要code和data属性。例子如下:
    ```
    {
      code: 0,
      data: {},
    }
    ```
    如果`code !== 0`, request.js 会统一对异常进行处理
