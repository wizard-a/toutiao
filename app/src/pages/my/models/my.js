
export default {
  namespace: 'my',

  state: {
  },


  effects: {
    *reg({ payload }, { call, put }) {
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
