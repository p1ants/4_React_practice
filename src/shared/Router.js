import React from 'react';
// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//1번.. 컴포넌트들 임포트.

import Home from '../pages/Home';
import Layout from './Layout';
import Detail from '../pages/Detail';

// 2. Router 라는 함수를 만들고 아래와 같이 작성합니다.
//BrowserRouter를 Router로 감싸는 이유는,
//SPA의 장점인 브라우저가 깜빡이지 않고 다른 페이지로 이동할 수 있게 만들어줍니다!
const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* 2번 라우터에 url작성 */}
          <Route path='/' element={<Home />} />

          <Route path='/:id' element={<Detail />} />
          {/* 동적임..  */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;

// import (About,home,contact,works 다 해줌..)
// router 에 url작성
// app.js 에 router.js 를 import 해주면 됨...
