// 统一引入ant-design-pro样式
// import 'ant-design-pro/dist/ant-design-pro.css';
import './style/main.less';



export function render(oldRender) {
  // console.log('wait for 1s');
  oldRender();
  // setTimeout(() => {
  //   console.log('do render');

  //   console.log('do render success');
  // }, 1000);
}

// export function rootContainer(container) {
//   const React = require('react');
//   console.log('container');
//   function Provider(props) {
//     return (
//       <>
//         <h1 id="provider">Provider</h1>
//         <div>{props.children}</div>
//       </>
//     );
//   }
//   return React.createElement(Provider, null, container);
// }
