import {NewsModelType} from "@/types/newType";
import {getNewList} from "@/service/newsList";

const NewsModel: NewsModelType = {
  namespace: 'news',
  state: {
    list: []
  },
  effects: {
    *getList({ payload }, { call, put }){
      const res = yield call(getNewList)
      yield put({
        type: 'setState',
        payload: {
          value: res.data,
          props: 'list'
        }
      })
    }
  },
  reducers: {
    setState(state, {payload}) {
      const {props,value} = payload;
      state[props] = value;
    },
  },
  subscriptions: {

  }
};
export default NewsModel;
