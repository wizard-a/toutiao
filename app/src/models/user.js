import { reg } from 'services/user';


export default {
  namespace: 'user',

  state: {
    regLoading: false,
    loginLoading: false,
  },


  effects: {
    *reg({ payload }, { call, put }) {
      const res = yield call(reg, payload);
    },
  },

  reducers: {
    saveUnReadCount(state, { payload }) {
      return {
        ...state,
        unReadCount: payload,
      };
    },
  },
};
