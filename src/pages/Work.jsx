// src/pages/Work.js

import React from 'react';
import { useParams } from 'react-router-dom';

const data = [
  { id: 1, todo: '리액트 배우기zz' },
  { id: 2, todo: '노드 배우기' },
  { id: 3, todo: '자바스크립트 배우기' },
  { id: 4, todo: '파이어 베이스 배우기' },
  { id: 5, todo: '넥스트 배우기' },
  { id: 6, todo: 'HTTP 프로토콜 배우기' },
];

function Work() {
  const param = useParams();

  const work = data.find((work) => work.id === parseInt(param.id));

  return <div>상세보기{work.todo}</div>;
}

export default Work;
