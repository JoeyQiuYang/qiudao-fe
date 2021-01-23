import {NewsModelType} from "@/types/newType";
import {getNewDetail, getNewList} from "@/service/newsList";

// @ts-ignore
import CryptoJS from 'crypto-js'

// Encrypt
// var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123').toString();
//
// // Decrypt
// var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
// var originalText = bytes.toString(CryptoJS.enc.Utf8);

// console.log(originalText);

const NewsModel: NewsModelType = {
  namespace: 'news',
  state: {
    list: [],
    detail: {
      id: '',
      md: '',
      sc: ''
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
