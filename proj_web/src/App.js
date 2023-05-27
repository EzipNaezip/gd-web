import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import Navigator from './Components/Navigator.jsx';
import DiscoverPage from './Pages/DiscoverPage';
import PostPage from './Pages/PostPage';
import MypagePage from './Components/Mypage/Mypage';
import ScrollToTop from './Utilities/ScrollToTop';
import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function App() {
  return (
    <GoogleOAuthProvider clientId="164566727064-ldq29hf1m3klv9rb3eukt53d9qdfn7jp.apps.googleusercontent.com">
      <BrowserRouter>
        <ScrollToTop />
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
    </GoogleOAuthProvider>
  );
}
