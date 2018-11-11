import { reg } from 'services/user';
import { Toast } from 'antd-mobile';
import router from 'umi/router';

export default {
  namespace: 'user',

  state: {
    regLoading: false,
    loginLoading: false,
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
  },

  reducers: {
    setRegLoading(state, { payload }) {
      return {
        ...state,
        regLoading: payload,
      }
    },
    saveUnReadCount(state, { payload }) {
      return {
        ...state,
        unReadCount: payload,
      };
    },
  },
};
