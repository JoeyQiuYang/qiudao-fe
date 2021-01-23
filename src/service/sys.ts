import fetch from "@/utils/fetch";
import {AxiosPromise} from "axios";
import {SysType} from "@/types/systemType";

export const getSysList = async ()=>{
  return fetch({
    url: '/sysList'
  }) as AxiosPromise<SysType[]>
}
