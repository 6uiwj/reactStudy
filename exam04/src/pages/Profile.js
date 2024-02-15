import React from 'react';
import { useParams, useLocation, useSearchParams } from 'react-router-dom';

const profiles = {
  user01: {
    name: '이이름',
    age: 30,
  },
  user02: {
    name: '김이름',
    age: 20,
  },
};

const Profile = () => {
  //const params = useParams();
  const { username } = useParams(); //우린 username만 필요해 , 비구조화 할당으로 username만 가져오자
  const { name, age } = profiles[username]; //비구조화 할당으로 분해
  // const location = useLocation(); //주소 관련 정보가 담겨 있음
  //console.log(location);
  const [searchParams, setSearchParams] = useSearchParams(); //[값, 바꿀 수 있는 형태]
  console.log(searchParams.get('spot'));
  console.log(searchParams.get('skey'));
  //searchParams: 개별로 바꿀때, setSearchParams: 전체를 바꿀 때
  setSearchParams({ sopt: 'name', skey: '이이름' });

  return (
    <>
      <div>이름 : {name}</div>
      <div>나이 : {age}</div>
    </>
  );
};

export default React.memo(Profile);
