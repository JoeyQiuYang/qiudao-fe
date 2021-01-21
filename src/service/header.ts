import fetch from "@/utils/fetch";

export const getNavs = async ()=>{
  return fetch({
    url: '/navs'
  })
}
