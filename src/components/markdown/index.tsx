import MarkdownIt from 'markdown-it'

interface PropsType {
  mkSource: string
}


export default ({mkSource}: PropsType)=>{
  const md = new MarkdownIt();
  const result = md.render(mkSource);

  return <div dangerouslySetInnerHTML={{__html: result}} />
}
