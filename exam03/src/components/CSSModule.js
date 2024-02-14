import { useState } from 'react';
import styles from './CSSModule.module.scss';
//import classNames from 'classnames';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const CSSModule = ({ name }) => {
  const [active, setActive] = useState(false); //토글형태로 기능 만들기

  //프록스 형태.....? 속성값으로 name 값을 넣어줌
  return (
    <>
      {' '}
      <header className={cx('wrap', { on: active })}>
        반갑습니다. <span className="title">{name}</span>{' '}
        {/*active가 true이면 노출 */}
        님..
      </header>
      <button type="button" onClick={() => setActive(!active)}>
        클릭!
      </button>
    </>
  );
};

export default CSSModule;
