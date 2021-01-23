import { Helmet } from 'umi';
import {useCallback, useEffect} from "react";
import { useDispatch, useSelector, useParams } from 'umi'
import moment from "moment";
import {NewsModelState} from "@/types/newType";

export default function IndexPage() {
  const dispatch = useDispatch();
  const newsListData = useSelector<any,NewsModelState>((state)=>state.news);
  const params = useParams<{id:string}>();

  useEffect(()=>{
    dispatch({
      type: 'news/getDetail',
      payload: params.id
    })
  },[params.id])

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>求道｜首页</title>
      </Helmet>
      <div
        style={{
          paddingTop: '10px'
        }}
      >
        {JSON.stringify(newsListData.detail)}
      </div>
    </div>
  );
}
