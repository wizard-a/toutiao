
import { add } from 'services/news';
import router from 'umi/router';

const defaultState = {
  loginErr: false,
  user: {},
};

export default {
  namespace: 'news',
  state: defaultState,
  effects: {
    *add({ payload }, { put, select, call }) {
      const res = yield call(add, payload);
      if (res) {
        router.push('/news/list');
      }
    },
  },

  reducers: {
    setLoginErr(state, { payload }) {
      return {
        ...state,
        loginErr: payload,
      };
    },
    setUser(state, { payload }) {
      return {
        ...state,
        user: payload,
      }
    }
  },
};
