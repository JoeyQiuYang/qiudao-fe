import {Effect, ImmerReducer} from "@@/plugin-dva/connect";
import {MocType, TechnologyType} from "@/types/common";

export interface News{
  title: string;
  id: string;
  description: string;
  type: TechnologyType[];
  createTime: number
}

export interface NewDetail{
  id: string;
  md: string;
  sc: string;
  moc: MocType[];
}
export interface NewsModelState {
  list: News[];
  detail: NewDetail
  [x: string]: any;
}
export interface NewsModelType {
  namespace: 'news';
  state: NewsModelState;
  effects: {
    getList: Effect;
    getDetail: Effect;
  };
  reducers: {
    setState: ImmerReducer<NewsModelState>;
  };
  subscriptions: {

  };
}
