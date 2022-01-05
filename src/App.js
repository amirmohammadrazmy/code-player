import React ,{useState , useEffect} from 'react'
import Editor from './Editor'
import useLocalStorage from '../hooks/useLocalStorage'
function App () {
  const[html, setHtml]= useLocalStorage( 'html' ,'')
  const[Css, setCss]= useLocalStorage('Css' ,'')
  const[js, setJs]= useLocalStorage('js' ,'')
  const[srcDoc, setSrcDoc]= useLocalStorage('')
 
  useEffect(() => {
     const timeout = setTimeout(() => {
        setSrcDoc(`
        <html>
        <body>${html}</body>
        <style>${Css}</style>
        <script>${js}</script>
        </html
        `)
     },250)

return() => clearTimeout(timeout)
  }, [html,Css,js])
  return (
  <>
    <div className="pane top-pane">
      <Editor language="xml" displayName= "اچ تی ام ال" 
      value={html} onChange={setHtml}
      />
      <Editor language="css" displayName= "سی اس اس" 
      value={Css} onChange={setCss}
      /> 
     <Editor language="javascript" displayName= "جاوا اسکریپت" 
      value={js} onChange={setJs}
      />
    </div>
    <div className="pane" >
      <iframe 
      srcDoc={srcDoc}
      title="output"
      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      frameBorder="0"
      width="100%"
      height="100%"
      />
      </div>
  </>
  )
}

export default App
