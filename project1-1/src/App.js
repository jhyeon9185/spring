import './App.css';
import Viewer from './component/Viewer';
import Controller from './component/Controller';
import { useEffect, useState } from 'react';


function App() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleSetCount = (value) => {
    setCount(count + value);
  }

  const handleCeangeText = (e) => {
    setText(e.target.value)
  }


/*
    [] : App.js 컴프런트가 로딩(mount)될 때 1회 실행 
    [cont] : count 값이 변경되면 useEffect 구문 실행
  */

  useEffect (() => {
    console.log("count update : " + text, count);

  }, [text, count]);


  return (
    <div className="App">

      <h1 className='main-title'>Simple Counter</h1>

      <section className='text-box'>
        <input value={text} onChange={handleCeangeText}/>
      </section>

      <section>
        <Viewer co = {count}/>
      </section>

      <section>
        <Controller handleSetCount={handleSetCount}/>
      </section>
      
    </div>
  );
}

export default App;
