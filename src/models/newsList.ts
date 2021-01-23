import {NewsModelType} from "@/types/newType";
import {getNewDetail, getNewList} from "@/service/newsList";

// @ts-ignore
import CryptoJS from 'crypto-js'

const NewsModel: NewsModelType = {
  namespace: 'news',
  state: {
    list: [],
    detail: {
      id: '',
      md: '',
      sc: '',
      moc: []
    }
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
    },
    *getDetail({ payload }, { call, put }){
      const res = yield call(getNewDetail)
      res.data.md = CryptoJS.AES.decrypt(res.data.md, res.data.sc).toString(CryptoJS.enc.Utf8);
      yield put({
        type: 'setState',
        payload: {
          value: res.data,
          props: 'detail'
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
