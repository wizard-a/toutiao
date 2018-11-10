
export default {
  namespace: 'global',

  state: {
  },


  effects: {
    *queryMessage({ payload }, { call, put }) {
    }
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
