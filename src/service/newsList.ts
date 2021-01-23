import fetch from "@/utils/fetch";
import {AxiosPromise} from "axios";
import {News,NewDetail} from "@/types/newType";

export const getNewList = async ()=>{
  return fetch({
    url: '/newsList'
  }) as AxiosPromise<News[]>
}

export const getNewDetail = async ()=>{
  return fetch({
    url: '/newsDetail',
    method: 'post'
  }) as AxiosPromise<NewDetail>
}
