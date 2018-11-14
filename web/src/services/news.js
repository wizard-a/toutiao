import request from '../utils/request';
/**
 * 添加新闻
 * @param {*} params
 */
export async function add(params) {
  return request.post('/api/v1/news/add', params);
}

/**
 * 退出登录
 */
export async function logout() {
  return request.getD('/api/v1/user/logout');
}
