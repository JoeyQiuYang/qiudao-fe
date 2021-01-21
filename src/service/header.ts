import fetch from "@/utils/fetch";
import {AxiosPromise} from "axios";
import {Nav} from "@/types/headerType";

export const getNavs = async ()=>{
  return fetch({
    url: '/navs'
  }) as AxiosPromise<Nav[]>
}
