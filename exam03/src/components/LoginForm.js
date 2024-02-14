import React, { useState, useCallback } from 'react'; //상태값에 따라 바뀌도록 useState 넣어주기
import { MediumButton as LoginButton } from './commons/StyledButton';
import { FiLogIn, FiSquare, FiCheckSquare } from 'react-icons/fi';

const LoginForm = () => {
  const [saveId, setSaveId] = useState(false);
  const onToggle = useCallback(() => setSaveId(() => !saveId), [saveId]); //함수는 렌더링이 다시 되면서 함수가 다시 호출 그때마다 함수가 새로 생성 -> 메모리 낭비 / 따라서 캐시해주자 바뀌지 않게... 특정 값이 바뀔 때만 새로 생성이 될 수 있도록 -> useCallBack 이용
  return (
    <>
      <h1>로그인</h1>
      <form>
        <input type="text" name="userId" placeholder="아이디" />
        <input type="password" name="password" placeholder="비밀번호" />
        <div onClick={onToggle}>
          {saveId ? <FiCheckSquare /> : <FiSquare />} 아이디 저장{' '}
          {/*참이면 체크박스, 거짓이면 그냥 박스 아이콘 출력*/}
        </div>
        <LoginButton type="submit" bcolor="primary" color="#fff">
          <FiLogIn />
          로그인
        </LoginButton>
      </form>
    </>
  );
};
//component를 export할 때는 항상 usememo 사용
//같은 컴포넌트이면 굳이 바뀌지 않도록 캐싱
export default React.memo(LoginForm);
