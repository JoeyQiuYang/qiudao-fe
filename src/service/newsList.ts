import fetch from "@/utils/fetch";
import {AxiosPromise} from "axios";
import {News} from "@/types/newType";

export const getNewList = async ()=>{
  return fetch({
    url: '/newsList'
  }) as AxiosPromise<News[]>
}
