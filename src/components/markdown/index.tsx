import MarkdownIt from 'markdown-it'

interface PropsType {
  mkSource: string
}


export default ({mkSource}: PropsType)=>{
  const md = new MarkdownIt();
  const result = md.render(mkSource);

  return <div
    style={{
      background: 'yellow'
    }}
    dangerouslySetInnerHTML={{__html: result}}
  />
}
