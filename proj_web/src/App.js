import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import Navigator from './Components/Navigator.jsx';
import DiscoverPage from './Pages/DiscoverPage';
import PostPage from './Pages/PostPage';
import MypagePage from './Components/Mypage/Mypage';
import ScrollToTop from './Utilities/ScrollToTop';
import React, { useEffect } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function App() {
  useEffect(() => {
    window.localStorage.setItem(
      'test',
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0b2tlbiIsImZvbGxvd0NvdW50IjoiMCIsInJvbGUiOiJBRE1JTiIsInByb3ZpZGVyIjoiR09PR0xFIiwicHJvZmlsZUltZ1VybCI6Imh0dHA6Ly9leGFtcGxlLmNvbS9wcm9maWxlLnBuZyIsIm5hbWUiOiJbMSA6IGFkbWluXSIsImRlc2NyaXB0aW9uIjoiVGhpcyBpcyB0aGUgYWRtaW4gdXNlciIsInBvc3RDb3VudCI6IjAiLCJ1c2VySWQiOiIxIiwiZm9sbG93ZXJDb3VudCI6IjAiLCJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwiaWF0IjoxNjg1NTMzMDY4LCJleHAiOjE3MTcxNTU0Njh9.rXmhh-RDdnXszwUKa-G7TsuB1zoa1M7CABwUwY8VxOU',
    );
  }, []);

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
