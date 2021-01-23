import {News} from '../src/types/newType'
import {TechnologyType} from "../src/types/enums";

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
  'GET /api/newsList': { data: list }
}
