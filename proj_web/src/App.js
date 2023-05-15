import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import Navigator from './Components/Navigator.jsx';
import DiscoverPage from './Pages/DiscoverPage';
import PostPage from './Pages/PostPage';
import CollectionPage from './Pages/CollectionPage';
import MypagePage from './Pages/MypagePage';

export default function App() {
  return (
    <>
      <Navigator />
      <section className="content md:container md:mx-auto mt-6 mb-6 px-4">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/discover" element={<DiscoverPage />} />
            <Route path="/post" element={<PostPage />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="/mypage" element={<MypagePage />} />
          </Routes>
        </BrowserRouter>
      </section>
    </>
  );
}
