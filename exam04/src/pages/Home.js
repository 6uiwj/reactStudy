import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>Home!</h1>
      <Link to="/about">About 페이지 이동</Link>
    </>
  );
};

export default React.memo(Home);
