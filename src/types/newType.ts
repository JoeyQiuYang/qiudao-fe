import {Effect, ImmerReducer} from "@@/plugin-dva/connect";
import {TechnologyType} from "@/types/enums";

export interface News{
  title: string;
  id: string;
  description: string;
  type: TechnologyType[];
  createTime: number
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
