import { reg, login, logout } from 'services/user';
import { Toast } from 'antd-mobile';
import localStorage from 'utils/localStorage';
import router from 'umi/router';

export default {
  namespace: 'user',

  state: {
    regLoading: false,
    loginLoading: false,
    user: null,
  },


  effects: {
    *reg({ payload }, { call, put }) {
      yield put({type: 'setRegLoading', payload: true});
      const res = yield call(reg, payload);
      if (res) {
        Toast.info('注册成功，请登录!', 2);
        setTimeout(() => {
          router.push('login');
        }, 2000)
      }
      yield put({type: 'setRegLoading', payload: false});
    },
    *login({ payload }, { call, put }) {
      yield put({type: 'setLoginLoading', payload: true});
      const res = yield call(login, payload);
      if (res) {
        // 设置 localStorage
        localStorage.add('user', res);
        yield put({type: 'setUser', payload: res});
        router.push('/my');
      }
      yield put({type: 'setLoginLoading', payload: false});
    },
    *logout({ payload }, { call, put }) {
      const res = yield call(logout);
      if (res) {
        localStorage.remove('user');
        yield put({
          type: 'setUser',
          payload: null
        })
      }
    },
  },

  reducers: {
    setRegLoading(state, { payload }) {
      return {
        ...state,
        regLoading: payload,
      }
    },
    setLoginLoading(state, { payload }) {
      return {
        ...state,
        loginLoading: payload,
      }
    },
    setUser(state, { payload }) {
      return {
        ...state,
        user: payload,
      }
    },
  },
};
