import { queryMessage, setIsRead } from 'services/message';


export default {
  namespace: 'global',

  state: {
  },


  effects: {
    *queryMessage({ payload }, { call, put }) {
      const param = {
        pageIndex: 1,
        pageNum: 15,
        orderKey: 'createdTime',
        orderBy: 'desc',
      };
      const res = yield call(queryMessage, param);
      if (res) {
        const re = res.rows.map((olditem) => {
          const item = { ...olditem };
          item.isopen = false;
          if (payload) {
            if (payload.ids[0] === item.id) {
              item.isopen = true;
            }
          }
          return item;
        });
        yield put({
          type: 'saveData',
          payload: {
            data: re,
          },
        });
        yield put({
          type: 'saveUnReadCount',
          payload: res.unReadCount,
        });
      }
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
