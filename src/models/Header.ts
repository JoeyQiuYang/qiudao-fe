import {HeaderModelType, NavTypes} from "@/types/headerType";
import {getNavs} from "@/service/header";

const HeaderModel: HeaderModelType = {
  namespace: 'header',
  state: {
    navs: [],
    activeKey: NavTypes.HOME
  },
  effects: {
    *updateActiveKey({ payload }, { call, put }) {
      const res = yield call(getNavs)
      yield put({
        type: 'setState',
        payload: {
          value: res.data,
          props: 'navs'
        }
      })
    },
  },
  reducers: {
    // 启用 immer 之后
    setState(state, {payload}) {
      const {props,value} = payload;
      state[props] = value;
    },
  },
  subscriptions: {

  }
};
export default HeaderModel;
