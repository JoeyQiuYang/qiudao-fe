import {Effect, ImmerReducer} from "@@/plugin-dva/connect";

export enum NewTypes{
  JAVASCRIPT='javascript',
  NODEJS='nodejs',
  VUE='vue.js',
  REACT='reactjs'
}

export interface News{
  title: string;
  key: string;
  id: string;
  link: string;
  type: NewTypes[];
}
export interface NewsModelState {
  list: News[];
  [x: string]: any;
}
export interface NewsModelType {
  namespace: 'news';
  state: NewsModelState;
  effects: {
    getList: Effect;
  };
  reducers: {
    setState: ImmerReducer<NewsModelState>;
  };
  subscriptions: {

  };
}
