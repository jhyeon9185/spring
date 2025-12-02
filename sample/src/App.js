import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleLogin = () => {
    console.log("아이디 : " , id);
    console.log("비밀번호 : ", pw);
    alert("로그인 버튼 누름");
  }

  return (
    <div className="App">
      <h2>로그인</h2>

      <div>
        <input 
          type="text"
          placeholder='아이디'
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>

      <div>
        <input 
          type='password'
          placeholder='비밀번호'
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />

        <button onClick={handleLogin}>로그인</button>


      </div>
    </div>
  );
}

export default App;
