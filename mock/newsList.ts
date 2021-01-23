import {News,NewDetail} from '../src/types/newType'
import {TechnologyType} from "@/types/common";
// @ts-ignore
import CryptoJS from 'crypto-js'

const list: News[] = [{
  title: 'title',
  id: '1',
  description: 'sdsd',
  type: [TechnologyType.JAVASCRIPT,TechnologyType.NODEJS],
  createTime: new Date().getTime()
},{
  title: 'title',
  id: '2',
  description: 'sdsd',
  type: [TechnologyType.JAVASCRIPT,TechnologyType.NODEJS],
  createTime: new Date().getTime()
}]

const newsDetail: NewDetail= {
  md:  CryptoJS.AES.encrypt('# test', '123456').toString(),
  sc: '123456',
  id: '1'
}

export default {
  // 支持值为 Object 和 Array
  'GET /api/newsList': { data: list },
  'POST /api/newsDetail': { data: newsDetail}
}
