import {Nav, NavTitleTypes, NavTypes} from '../src/types/headerType'

const navs: Nav[] = [{
  title: NavTitleTypes[NavTypes.HOME],
  key: NavTypes.HOME,
  link: '/home/new'
},{
  title: NavTitleTypes[NavTypes.SYSTEM],
  key: NavTypes.SYSTEM,
  link: '/home/system'
}]

export default {
  // 支持值为 Object 和 Array
  'GET /api/navs': { data: navs }
}
