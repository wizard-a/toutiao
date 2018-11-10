import { reg } from 'services/user';
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
        router.push('login');
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
