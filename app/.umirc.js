const path = require('path');

const server = 'http://localhost:3000';

// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: true,
      dynamicImport: false,
      title: 'app',
      dll: false,
      routes: {
        exclude: [
          /models/,
          /services/,
          /_components/,
          /components/,
          /_pages/,
        ],
      },
      // hardSource: /** isMac */ process.platform === 'darwin',
    }],
  ],
  chainWebpack(config, { webpack }) {
  },
  alias: {
    bcomponents: path.resolve(__dirname, './src/bcomponents'),
    config: path.resolve(__dirname, './src/config'),
    components: path.resolve(__dirname, './src/components'),
    utils: path.resolve(__dirname, './src/utils'),
    services: path.resolve(__dirname, './src/services'),
    assets: path.resolve(__dirname, './src/assets'),
    src: path.resolve(__dirname, './src'),
  },
  proxy: {
    "/api": {
      "target": server,
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "/api" }
    },
  },
}
