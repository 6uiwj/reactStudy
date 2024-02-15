import { Routes, Route } from 'react-router-dom'; //Route: 주소와 보여줄 컴포넌트를 설정하는 컴포넌트
import Home from './pages/Home'; //Home, About: 페이지 컴포넌트
import About from './pages/About';
import Profile from './pages/Profile';
import ProfileHeader from './pages/ProfileHeader';
import MainLayout from './layouts/MainLayout';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
      {/*하단에 정의하는 이유 : 상단쪽을 먼저 체크해보고 없으면 마지막에 유입 */}
      <Route path="*" element={<NotFound />} />{' '}
      {/** "*" : 전부다 유입하고 없으면 ... */}
    </Routes>
  );
};
export default App;
