import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
// import TodoCard from '.todo/';

//모듈.. 임포트.
import { addNumber } from './redux/modules/todos';

function TodoList(props) {
  console.log('s');
  return (
    <div className='todolist'>
      <h2>Todo-{props.todoList.title}</h2>
      <div>todo-{props.todoList.content}</div>
      <div className='todolist_button'>
        <button
          color='red'
          // onClick={() => {
          //   props.handledDelete(props.todoList.id);
          // }}
        >
          삭제하기
        </button>
        <button
          color='green'
          // onClick={() => {
          //   props.doneLisHandler(props.todoList.id);
          // }}
        >
          {/* {props.todoList.isComplete ? '취소' : '완료'} */}
        </button>
      </div>
    </div>
  );
}

function App() {
  const todoList = useSelector((state) => state.todos.todoList);
  const dispatch = useDispatch();

  // 인풋값
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  //추가 하기 버튼
  const addHandler = (e) => {
    const Todolist = {
      id: todoList.length + 1,
      title: title,
      content: content,
      isComplete: false,
    };

    // setTitle('');
    // setDedescription('');

    //리덕스로 속성 보내기.
    dispatch(addNumber(Todolist));
  };

  return (
    <div>
      <button onClick={addHandler}>qq</button>
      <div className='titleBar'>
        <div>제목</div>
        <input
          type='text'
          placeholder='제목입력...'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div>내용</div>
        <input
          type='text'
          placeholder='내용입력...'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <h1>working</h1>
      <div className='todoListBox'>
        {todoList.map((todoList) => {
          if (!todoList.isComplete) {
            return (
              <TodoList
                // doneLisHandler={doneLisHandler}
                // handledDelete={deleteTodoListHandler}
                todoList={todoList}
                key={todoList.id}
              >
                {/* {' '} */}
              </TodoList>
            );
          } else {
            return null;
          }
        })}
      </div>
      <h1>done</h1>

      <div className='todoListBox'>
        {todoList.map((todoList) => {
          if (todoList.isComplete) {
            return (
              <TodoList
                // doneLisHandler={doneLisHandler}
                // handledDelete={deleteTodoListHandler}
                todoList={todoList}
                key={todoList.id}
              ></TodoList>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default App;
