import { Menu } from 'antd';
import { Helmet, IGetInitialProps } from 'umi';
import {useCallback, useEffect} from "react";
import { useDispatch, useSelector } from 'umi'
import { getNavs } from '@/service/header'
import {HeaderModelState, Nav, NavTypes} from "@/types/headerType";

export default function IndexPage({header}:{header: HeaderModelState}) {
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
      <div
        style={{
          maxWidth: '700px',
          margin: '0 auto'
        }}
      >
        <Menu
          mode="horizontal"
          selectedKeys={[headerData.activeKey]}
          onClick={changeNavs}
        >
          {
            header.navs.map(({title,key,link})=>{
              return <Menu.Item key={key}>{title}</Menu.Item>
            })
          }
        </Menu>
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
