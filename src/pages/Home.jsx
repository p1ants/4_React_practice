import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import TodoList from './TodoList';
import { addTodo } from '../redux/modules/todos';
import { deleteTodo } from '../redux/modules/todos';
import { doneTodo } from '../redux/modules/todos';
// import { useParams } from 'react-router-dom';

import './App.css';

const Home = () => {
  const navigate = useNavigate();
  const todoList = useSelector((state) => state.todos.todoList);
  const dispatch = useDispatch();

  //제목,내용 value값..
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  //추가 하기 버튼
  const addHandler = (e) => {
    const Todolist = {
      // id: todoList.length + 1,
      id: todoList[todoList.length - 1].id + 1,

      title: title,
      content: content,
      isComplete: false,
    };
    //추가하기 버튼시 초기화과정..
    setTitle('');
    setContent('');
    //리덕스로 속성 보내기.
    dispatch(addTodo(Todolist));
  };

  //삭제버튼
  const deleteTodoListHandler = (id) => {
    dispatch(deleteTodo(id));
    //유저의 아이디가 내가 설정한 아이디와 같지 않으면 .. 그것만 필터해서 새로운 배열 만들어라.
    // props로 delete 함수 넘겨줘야함...
  };

  //완료 버튼
  const doneLisHandler = (id) => {
    dispatch(doneTodo(id));
  };

  // const work = data.find((work) => work.id === parseInt(param.id));

  return (
    <div>
      <div>
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
          <button onClick={addHandler}>추가</button>
        </div>

        <h1>working</h1>
        <div className='todoListBox'>
          {todoList.map((todoList) => {
            if (!todoList.isComplete) {
              return (
                <div>
                  <TodoList
                    doneLisHandler={doneLisHandler}
                    handledDelete={deleteTodoListHandler}
                    todoList={todoList}
                    key={todoList.id}
                  >
                    {/* {' '} */}
                  </TodoList>
                </div>
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
                  doneLisHandler={doneLisHandler}
                  handledDelete={deleteTodoListHandler}
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
    </div>
  );
};

export default Home;

// navigate 훅  사용 원하는곳으로 페이지를 이동시킬수있음..
