import {Effect, ImmerReducer} from "@@/plugin-dva/connect";
import {TechnologyType} from "@/types/enums";

export interface SysType{
  title: string;
  id: string;
  description: string;
  type: TechnologyType[];
  createTime: number
}
export interface SysModelState {
  list: SysType[];
  [x: string]: any;
}
export interface SysModelType {
  namespace: 'sys';
  state: SysModelState;
  effects: {
    getList: Effect;
  };
  reducers: {
    setState: ImmerReducer<SysModelState>;
  };
  subscriptions: {

  };
}
