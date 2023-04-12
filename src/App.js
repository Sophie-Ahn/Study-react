// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

// props는 컴포넌트를 사용하는 외부자를 위함
// state는 컴포넌트를 사용하는 내부자를 위함
function Header(props) {
  console.log('props', props, props.title);
  return <header>
  <h1 href="/" onClick={(event)=>{
    event.preventDefault();
    props.onChangeMode();
  }}>WEB</h1>
</header>
};

function Nav(props) {
  const lis = []
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={event=>{
      event.preventDefault();
      props.onChangeMode(event.target.id); //target은 이벤트를 유발시킨 태그를 말함 여기선 a를 말함
    }}>{t.title}</a></li>)
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function Article(props) {
  return <article>
    <h2>welcome</h2>
    Hello this is article'text
    {props.title}
    {props.body}
  </article>
}

function App() {
  const [mode, setMode] = useState('Welcome');
  const topics = [
    {id:1, title:'html', body:'is html'},
    {id:2, title:'css', body:'is css'},
    {id:3, title:'js', body:'is js'}
  ]
  let content = null
  if(mode === 'Welcome'){
    content = <Article title="Welcome" body="Hello, Web"></Article>
  }else if(mode === 'Read'){
    content = <Article title="Read" body="Hello, Read"></Article>
  };
  return (
    <div>
      <Header title="React" onChangeMode={()=>{
        setMode = 'Welcome';
      }}></Header>
      <Nav topics={topics} onChangeMode={()=>{
        setMode = 'Read';
      }}></Nav>
      {content} {/* article에 대한것 */}
    </div>
  );
}

export default App;
