import React from 'react';
import Header from '../outlines/Header';
import Footer from '../outlines/Footer';
import { Outlet } from 'react-router-dom';

//헤더와 푸터를 넣어주고 교체할 부분을 정의
const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default React.memo(MainLayout);
