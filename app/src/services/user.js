import request from 'utils/request';

/**
 * 注册
 * @param {*} params
 */
export async function reg(params) {
  return request.post('/api/v1/user/reg', params);
}

/**
 * 登录
 * @param {*} params
 */
export async function login(params) {
  return request.post('/api/v1/user/login', params);
}


/**
 * 登出
 * @param {*} params
 */
export async function logout(params) {
  return request.get('/api/v1/user/logout');
}


/**
 * 编辑
 * @param {*} params
 */
export async function edit(params) {
  return request.post('/api/v1/user/edit', params);
}
