import {News, NewTypes} from '../src/types/newType'

const list: News[] = [{
  title: 'title',
  id: '1',
  description: 'sdsd',
  type: [NewTypes.JAVASCRIPT,NewTypes.NODEJS],
  createTime: new Date().getTime()
},{
  title: 'title',
  id: '2',
  description: 'sdsd',
  type: [NewTypes.JAVASCRIPT,NewTypes.NODEJS],
  createTime: new Date().getTime()
}]

export default {
  // 支持值为 Object 和 Array
  'GET /api/newsList': { data: list }
}
