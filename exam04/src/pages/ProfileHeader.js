import React from 'react';
import { Outlet } from 'react-router-dom';
//중첩된 라우터를 통해 중첩된

const ProfileHeader = () => {
  return (
    <>
      <h1>프로필 상당 공통</h1>
      <Outlet /> {/* 중첩된 라우터 쪽에 있는 부분이 여기에 출력  */}
    </>
  );
};

export default React.memo(ProfileHeader);
