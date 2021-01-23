import { Menu } from 'antd';
import { Helmet, IGetInitialProps, Link } from 'umi';
import {ReactElement, useCallback, useState} from "react";
import { useDispatch, useSelector } from 'umi'
import { getNavs } from '@/service/header'
import {HeaderModelState, NavTypes} from "@/types/headerType";

export default function IndexPage({header,children}:{header: HeaderModelState, children: ReactElement}) {
  const dispatch = useDispatch();

  const headerData = useSelector<any,HeaderModelState>((state)=>state.header);

  const h = header ? header:headerData;


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
    <div
      style={{
        background: '#F4F5F5'
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>求道｜首页</title>
      </Helmet>
      <div
        style={{
          background: '#fff'
        }}
      >
        <div
          style={{
            maxWidth: '700px',
            margin: '0 auto'
          }}
        >

          <div
            style={{
              paddingRight: '100px',
              position: 'relative'
            }}
          >
            <Menu
              mode="horizontal"
              selectedKeys={[headerData.activeKey]}
              onClick={changeNavs}
            >
              {
                h.navs.map(({title,key,link})=>{
                  return <Menu.Item key={key}>
                    <Link to={link}>{title}</Link>
                  </Menu.Item>
                })
              }
            </Menu>
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0
              }}
            >
              登录
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          minHeight: '800px'
        }}
      >
        {children}
      </div>
    </div>
  );
}

IndexPage.getInitialProps = (async (ctx) => {
  if (ctx.isServer) {
    const { data } = await getNavs();
    return {
      header: {
        navs: data,
        activeKey: NavTypes.HOME
      }
    }
  }
}) as IGetInitialProps;
