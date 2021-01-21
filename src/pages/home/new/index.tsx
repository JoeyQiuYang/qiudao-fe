import { Menu } from 'antd';
import { Helmet, IGetInitialProps } from 'umi';
import {ReactElement, useCallback} from "react";
import { useDispatch, useSelector } from 'umi'
import { getNavs } from '@/service/header'
import {HeaderModelState, NavTypes} from "@/types/headerType";

export default function IndexPage({header,children}:{header: HeaderModelState, children: ReactElement}) {
  const dispatch = useDispatch();

  const headerData = useSelector<any,HeaderModelState>((state)=>state.header);
  const changeNavs = useCallback((v)=>{
    dispatch({
      type: 'header/setState',
      payload: {
        value: v.key,
        props: 'activeKey'
      }
    })
  },[])

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>求道｜首页</title>
      </Helmet>
      <div>
        new
      </div>
    </div>
  );
}

IndexPage.getInitialProps = (async (ctx) => {
  const { data } = await getNavs();
  return {
    header: {
      navs: data,
      activeKey: NavTypes.HOME
    }
  }
}) as IGetInitialProps;
