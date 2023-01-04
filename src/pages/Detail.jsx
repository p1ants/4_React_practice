// src/pages/Work.js

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Detail() {
  const navigate = useNavigate();
  const param = useParams();
  const todoList = useSelector((state) => state.todos.todoList);

  const work = todoList.find((work) => work.id === parseInt(param.id));

  return (
    <div>
      <div>
        <span>ID:{work.id}</span>
        <button onClick={() => navigate('/')}>이전으로</button>
      </div>
      <div>{work.title}</div>
      <div>{work.content}</div>
    </div>
  );
}

export default Detail;
