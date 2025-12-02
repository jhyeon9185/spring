import './App.css';
import Viewer from './component/Viewer';
import Controller from './component/Controller';
import { useState } from 'react';


function App() {

  const [count, setCount] = useState(0);

  const handleSetCount = (value) => {
    setCount(count + value);
  }

  return (
    <div className="App">

      <h1 className='main-title'>Simple Counter</h1>

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
