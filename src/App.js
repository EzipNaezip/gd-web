import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import Navigator from "./Components/Navigator.jsx";
import DiscoverPage from "./Pages/DiscoverPage";
import PostPage from "./Pages/PostPage";
import MypagePage from "./Pages/MypagePage";
import PolicyPage from "./Pages/PolicyPage";
import ScrollToTop from "./Utilities/ScrollToTop";
import React, { useEffect, useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import LoginTokenPage from "./Pages/LoginTokenPage";
import SearchPage from "./Pages/SearchPage";
import RequireAuth from "./Utilities/RequireAuth";

export default function App() {
  const [apiCall, setApiCall] = useState(false);
  const [refreshNavigator, setRefreshNavigator] = useState(false);

  const setCall = () => {
    setApiCall(!apiCall);
  };

  useEffect(() => {
    setRefreshNavigator(true);
  }, []);

  useEffect(() => {
    // API 호출이 성공한 경우에만 Navigator 컴포넌트를 재렌더링하도록 설정합니다.
    setRefreshNavigator((prevState) => !prevState);
  }, [apiCall]);

  return (
    <GoogleOAuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navigator key={refreshNavigator.toString()} />
        <section className="content md:container md:mx-auto mt-6 mb-6 px-4">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route
              path="/discover"
              element={
                <RequireAuth>
                  <DiscoverPage />
                </RequireAuth>
              }
            />
            <Route
              path="/discover/:keyword"
              element={
                <RequireAuth>
                  <SearchPage />
                </RequireAuth>
              }
            />
            <Route
              path="/post/:postNum"
              element={
                <RequireAuth>
                  <PostPage />
                </RequireAuth>
              }
            />
            <Route
              path="/mypage/:userId"
              element={
                <RequireAuth>
                  <MypagePage setApiCall={setCall} />
                </RequireAuth>
              }
            />
            <Route path="/policy" element={<PolicyPage />} />
            <Route path="/login/:token" element={<LoginTokenPage />} />
          </Routes>
        </section>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}
