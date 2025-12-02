import { useReducer, useRef, useState } from 'react'
import './App.css'
import Header from './components/Header'
import TodoEditor from './components/TodoEditor'
import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList'
import TestComp from './components/TestComp'
import React from 'react'


// 기본 값, 초기 화면에서 보여줌
const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createDate: new Date().getTime(),
  },
]

// reducer: 현재 state(배열)와 action(명령)을 받아서
// '새로운 state'를 만들어 반환하는 함수
function reducer(state, action){

  switch(action.type){

    case "CREATE":
      // CREATE: 새로운 아이템을 state 앞에 추가한 새 배열을 반환
      // (기존 state는 직접 수정하지 않고, 복사 후 새로 반환해야 함)
      return [action.newItem, ...state];
    
    case "UPDATE":
      // UPDATE: id가 일치하는 아이템만 isDone 값을 반전(!)시킴
      // 나머지는 그대로 유지. map으로 새 배열 생성.
      return state.map( (it) => 
        it.id === action.id 
          ? { ...it, isDone: !it.isDone }
          : it 
      );

    case "DELETE":
      // DELETE: id가 일치하지 않는 아이템만 남겨서 필터링
      // → 즉, 해당 id 아이템을 제거한 새 배열 반환
      return state.filter(it => it.id !== action.id);

    default:
      // 예외: 정의되지 않은 action.type이면 현재 state 그대로 반환
      return state;
  }
}

export const TodoContext = React.createContext();

function App() {
  
  const [todo, dispatch] = useReducer(reducer, mockTodo)
  const idRef = useRef(3);
  
  /* 데이타 추가 하기*/
  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        content: content,
        isDone: false,
        createDate: new Date().getTime()
      }
    })
    idRef.current += 1;
  };

  /* 데이타 수정 하기*/
  const OnUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      id: targetId
    });
  };

  /* 데이타 삭제 하기*/
  const onDelete = (targetId) =>{
    dispatch({
      type: "DELETE",
      id: targetId
    });
  };
  
  return (
    <div className="App">

      {/* <TestComp /> */}

      <Header />

      <TodoContext.Provider value={{todo, onCreate, OnUpdate, onDelete}}>
        <TodoEditor />
        <TodoList />
      </TodoContext.Provider>

    </div>
  )
}

export default App