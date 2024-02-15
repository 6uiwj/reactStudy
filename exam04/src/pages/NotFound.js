import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h1>페이지 없음...</h1>
      <Link to="/">메인페이지로 이동</Link>
    </>
  );
};

export default React.memo(NotFound); //NotFound이면 메인페이지로 돌아갈 수 있도록 링크 걸어주자
