import {News} from '../src/types/newType'
import {TechnologyType} from "../src/types/common";

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

export default {
  // 支持值为 Object 和 Array
  'GET /api/sysList': { data: list }
}
