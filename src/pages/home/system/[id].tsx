import { Helmet } from 'umi';
import {useCallback, useEffect} from "react";
import { useDispatch, useSelector, useParams } from 'umi'
import moment from "moment";
import {NewsModelState} from "@/types/newType";
import MkView from "@/components/markdown";
import {Menu} from 'antd'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;


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
          paddingTop: '10px',
          position: 'relative'
        }}
      >
        <div
          style={{
            position: 'fixed',
            background: 'red',
            top: 0,
            left: 0,
            paddingTop: '48px',
            height: '100%',
          }}
        >
          <div
            style={{
              height: '100%',
              overflow: 'auto'
            }}
          >
            <Menu
              // onClick={this.handleClick}
              style={{ width: 256 }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
            >
              <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                <Menu.ItemGroup key="g1" title="Item 1">
                  <Menu.Item key="1">Option 1</Menu.Item>
                  <Menu.Item key="2">Option 1</Menu.Item>
                  <Menu.Item key="3">Option 1</Menu.Item>
                  <Menu.Item key="4">Option 1</Menu.Item>
                  <Menu.Item key="5">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="g2" title="Item 2">
                  <Menu.Item key="3">Option 3</Menu.Item>
                  <Menu.Item key="4">Option 4</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </Menu>
          </div>
        </div>
        <MkView mkSource={newsListData.detail.md} />
        <div
          style={{
            height: '200px',
            width: '100px',
            background: '#fff',
            position: 'absolute',
            top: '50px',
            right: '-120px'
          }}
        >
          sdfsd
        </div>
      </div>
    </div>
  );
}
