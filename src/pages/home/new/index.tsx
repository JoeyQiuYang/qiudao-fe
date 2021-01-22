import { Menu } from 'antd';
import { Helmet, IGetInitialProps } from 'umi';
import {ReactElement, useCallback, useEffect} from "react";
import { useDispatch, useSelector } from 'umi'
import { getNavs } from '@/service/header'
import {NewsModelState} from "@/types/newType";

export default function IndexPage() {
  const dispatch = useDispatch();

  const newsListData = useSelector<any,NewsModelState>((state)=>state.news);

  useEffect(()=>{
    dispatch({
      type: 'news/getList',
    })
  },[])

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>求道｜首页</title>
      </Helmet>
      <div>
        {JSON.stringify(newsListData)}
      </div>
    </div>
  );
}
