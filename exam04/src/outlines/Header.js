import React from 'react';
import { useNavigate, Navigate, NavLink } from 'react-router-dom';
import classNames from 'classnames';

const Header = () => {
  const navigate = useNavigate(); //주소가 입력되면 주소가 이동함
  const isLogin = false;

  if (!isLogin) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <h1>헤더 영역</h1>;
      <button
        type="button"
        onClick={() => navigate('/login', { replace: true })} //방문기록 남지 않도록 replace:true
      >
        로그인
      </button>
      <button type="button" onClick={() => navigate(-1)}>
        BACK
      </button>
      {/*이전 페이지로 이동*/}
      <button type="button" onClick={() => navigate(1)}>
        FORWARD
      </button>
      <NavLink
        to="/about"
        className={({ isActive }) => classNames({ on: isActive })}
      >
        About 페이지
      </NavLink>
      {/* 비구조화 할당 */}
    </>
  );
};

export default React.memo(Header);
