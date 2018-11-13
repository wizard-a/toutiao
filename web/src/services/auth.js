// import request from '../utils/request';
import menu from 'config/menu';
/**
 * 获取菜单数据
 * @param {*} params
 */
export async function getMenu(userName) {
  return new Promise((resolve, reject) => {
    resolve(menu);
  });
}
