import {News, NewTypes} from '../src/types/newType'

const list: News[] = [{
  title: 'title',
  key: '22',
  id: '22',
  link: 'link',
  type: [NewTypes.JAVASCRIPT]
}]

export default {
  // 支持值为 Object 和 Array
  'GET /api/newsList': { data: list }
}
