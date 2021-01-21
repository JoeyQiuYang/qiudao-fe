import {Effect, ImmerReducer} from "@@/plugin-dva/connect";

export enum NavTypes{
  HOME='HOME',
  SYSTEM='SYSTEM'
}

export enum NavTitleTypes{
  HOME='主页',
  SYSTEM='系统'
}
export interface Nav{
  title: NavTitleTypes;
  key: NavTypes;
  link: string;
}
export interface HeaderModelState {
  navs: Nav[];
  activeKey: string;
  [x: string]: any;
}
export interface HeaderModelType {
  namespace: 'header';
  state: HeaderModelState;
  effects: {
    updateActiveKey: Effect;
  };
  reducers: {
    setState: ImmerReducer<HeaderModelState>;
  };
  subscriptions: {

  };
}
