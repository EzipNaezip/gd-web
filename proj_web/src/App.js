import { RecoilRoot } from "recoil";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import MainPage from "./Pages/MainPage";
import NavbarComponent from "../src/Components/NavbarComponent.jsx";
import DiscoverPage from "./Pages/DiscoverPage";

function App() {
  return (
    <RecoilRoot>
      <NavbarComponent />
      <section className="content sm:container sm:mx-auto mt-6 mb-6 px-4">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/discover" element={<DiscoverPage />} />
          </Routes>
        </BrowserRouter>
      </section>
    </RecoilRoot>
  );
}

export default App;
