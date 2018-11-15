const path = require('path');
let server = 'http://localhost:3000';

if (process.env.SERVER === 'server') {
  server = 'http://39.105.188.65';
}

// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      // dynamicImport: true,
      title: '头条-后台管理系统',
      pwa: false,
      routes: {
        exclude: [
          /models/,
          /services/,
          /_components/,
        ],
      },
      dll: {
        exclude: [],
        // include: ['dva', "dva/router", "dva/saga", "dva/fetch", "antd/es", 'lodash'],
      },
      hardSource: true,
    }],
  ],
  alias: {
    bcomponents: path.resolve(__dirname, './src/bcomponents'),
    config: path.resolve(__dirname, './src/config'),
    components: path.resolve(__dirname, './src/components'),
    utils: path.resolve(__dirname, './src/utils'),
    pages: path.resolve(__dirname, './src/pages'),
    services: path.resolve(__dirname, './src/services'),
    assets: path.resolve(__dirname, './src/assets'),
  },
  proxy: {
    "/api": {
      "target": server,
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "/api" }
    },
  },
}
