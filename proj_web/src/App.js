import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import Navigator from './Components/Navigator.jsx';
import DiscoverPage from './Pages/DiscoverPage';
import PostPage from './Pages/PostPage';
import MypagePage from './Pages/MypagePage';
import PolicyPage from './Pages/PolicyPage';
import ScrollToTop from './Utilities/ScrollToTop';
import React, { useEffect, useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import LoginTokenPage from './Pages/LoginTokenPage';
import SearchPage from './Pages/SearchPage';

export default function App() {
  const [apiCall, setApiCall] = useState(false);
  const [refreshNavigator, setRefreshNavigator] = useState(false);

  const setCall = () => {
    setApiCall(!apiCall);
  };

  useEffect(() => {
    window.localStorage.setItem(
      'test',
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0b2tlbiIsImZvbGxvd0NvdW50IjoiMCIsInJvbGUiOiJBRE1JTiIsInByb3ZpZGVyIjoiR09PR0xFIiwicHJvZmlsZUltZ1VybCI6Imh0dHA6Ly9leGFtcGxlLmNvbS9wcm9maWxlLnBuZyIsIm5hbWUiOiJbMSA6IGFkbWluXSIsImRlc2NyaXB0aW9uIjoiVGhpcyBpcyB0aGUgYWRtaW4gdXNlciIsInBvc3RDb3VudCI6IjAiLCJ1c2VySWQiOiIxIiwiZm9sbG93ZXJDb3VudCI6IjAiLCJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwiaWF0IjoxNjg1NTMzMDY4LCJleHAiOjE3MTcxNTU0Njh9.rXmhh-RDdnXszwUKa-G7TsuB1zoa1M7CABwUwY8VxOU',
    );
    window.localStorage.setItem('testID', '1');
    setRefreshNavigator(true);
  }, []);

  useEffect(() => {
    // API 호출이 성공한 경우에만 Navigator 컴포넌트를 재렌더링하도록 설정합니다.
    setRefreshNavigator((prevState) => !prevState);
  }, [apiCall]);

  return (
    <GoogleOAuthProvider clientId="164566727064-ldq29hf1m3klv9rb3eukt53d9qdfn7jp.apps.googleusercontent.com">
      <BrowserRouter>
        <ScrollToTop />
        <Navigator key={refreshNavigator.toString()} />
        <section className="content md:container md:mx-auto mt-6 mb-6 px-4">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/discover" element={<DiscoverPage />} />
            <Route path="/discover/:keyword" element={<SearchPage />} />
            <Route path="/post/:postNum" element={<PostPage />} />
            <Route path="/mypage/:userId" element={<MypagePage setApiCall={setCall} />} />
            <Route path="/policy" element={<PolicyPage />} />
            <Route path="/login/:token" element={<LoginTokenPage />} />
          </Routes>
        </section>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}
