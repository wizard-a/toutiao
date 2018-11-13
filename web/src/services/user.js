import request from '../utils/request';
/**
 * 登录
 * @param {*} params
 */
export async function login(params) {
  return request.postD('/api/v1/user/login', params);
}

/**
 * 退出登录
 */
export async function logout() {
  return request.getD('/api/v1/user/logout');
}
