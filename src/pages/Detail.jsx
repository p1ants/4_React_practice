// src/pages/Work.js
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

const StBox = styled.div`
  max-width: 1200px;
  width: 90%;
  height: 1000px;
  border: 1px solid gray;
  border-radius: 15px;
  margin: 20px 20px 20px 20px;
`;

const StBox_top = styled.div`
  display: flex;

  justify-content: space-between;
  padding: 20px;
`;

const StContainer = styled.div`
  border: 2px solid #eee;
  width: 99.5%;
  height: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Detail() {
  // const dispatch = useDispatch()
  const navigate = useNavigate();
  const param = useParams();
  const todoList = useSelector((state) => state.todos.todoList);
  const work = todoList.find((work) => work.id === parseInt(param.id));
  // dispatch()
  return (
    <StBox>
      <StBox_top>
        <span>ID:{work.id}</span>
        <button onClick={() => navigate('/')}>이전으로</button>
      </StBox_top>

      <StContainer>
        <h1>{work.title}</h1>
        <div>{work.content}</div>
      </StContainer>
    </StBox>
  );
}

export default Detail;
