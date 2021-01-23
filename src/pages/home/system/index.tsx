import { Helmet } from 'umi';
import {useCallback, useEffect} from "react";
import { useDispatch, useSelector, history } from 'umi'
import moment from "moment";
import {NewsModelState} from "@/types/newType";

export default function IndexPage() {
  const dispatch = useDispatch();

  const newsListData = useSelector<any,NewsModelState>((state)=>state.news);

  const goToDetail = useCallback<(id: string)=>void>((id)=>{
    history.push(`/home/system/${id}`)
  },[])

  useEffect(()=>{
    dispatch({
      type: 'sys/getList',
    })
  },[])

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>求道｜系统</title>
      </Helmet>
      <div
        style={{
          paddingTop: '10px'
        }}
      >
        {
          newsListData
            .list
            .map(({
               description,
               title,
               id,
               createTime,
               type
             })=>{
            return (
              <div
                style={{
                  height: '117px',
                  background: '#fff',
                  padding: '18px 24px',
                  borderBottom: '1px solid rgba(178,186,194,.15)',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}

                key={id}

                onClick={()=>{goToDetail(id)}}
              >
                <div>
                  <div
                    style={{
                      color: '#b2bac2',
                      fontSize: '12px'
                    }}
                  >
                    <span
                      style={{
                        marginRight: '10px'
                      }}
                    >{moment(createTime).format('YYYY-MM-DD')}</span>
                    {
                      type.map((v, i)=>{
                        if(i === type.length - 1){
                          return <span key={v}>{v}</span>
                        }
                        return <span key={v}>{`${v} / `}</span>
                      })
                    }
                  </div>
                  <div
                    style={{
                      color: '#2e3135',
                      fontSize: '20px',
                      fontWeight: 600
                    }}
                  >{title}</div>
                  <div>{description}</div>
                </div>
                <div />
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
