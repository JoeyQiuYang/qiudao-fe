import { Menu } from 'antd';
import { Helmet } from 'umi';
import {useCallback, useEffect} from "react";
import { useDispatch, useSelector } from 'umi'
import {HeaderModelState} from "@/types/headerType";


export default function IndexPage() {
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

  useEffect(()=>{
    dispatch({
      type: 'header/updateActiveKey'
    })
  },[dispatch])

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
            headerData.navs.map(({title,key,link})=>{
              return <Menu.Item key={key}>{title}</Menu.Item>
            })
          }
        </Menu>
      </div>
    </div>
  );
}
