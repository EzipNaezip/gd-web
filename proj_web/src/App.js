import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import Navigator from './Components/Navigator.jsx';
import DiscoverPage from './Pages/DiscoverPage';
import PostPage from './Pages/PostPage';
import MypagePage from './Components/Mypage/Mypage';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigator />
        <section className="content md:container md:mx-auto mt-6 mb-6 px-4">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/discover" element={<DiscoverPage />} />
            <Route path="/post" element={<PostPage />} />
            <Route path="/mypage" element={<MypagePage />} />
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
}
