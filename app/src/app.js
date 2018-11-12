import './style/main.less';
import localStorage from 'utils/localStorage';
console.log('init');


function initUser() {
  const { dispatch } = window.g_app._store;
  const user =  localStorage.get('user');
  if (user) {
    const userObj = JSON.stringify(user);
    dispatch({
      type: 'user/setUser',
      payload: userObj,
    });
  }

}


export function render(oldRender) {
  // console.log('wait for 1s');
  oldRender();
  initUser();
}

// export function patchRoutes(config) {
//   console.log(config);
// }

// export function rootContainer(container) {
//   const React = require('react');
//   function Provider(props) {
//     return (
//       <>
//         {props.children}
//       </>
//     );
//   }
//   return React.createElement(Provider, null, container);
// }
