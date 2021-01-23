import {SysModelType} from "@/types/systemType";
import {getSysList} from "@/service/sys";

const NewsModel: SysModelType = {
  namespace: 'sys',
  state: {
    list: []
  },
  effects: {
    *getList({ payload }, { call, put }){
      const res = yield call(getSysList)
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
