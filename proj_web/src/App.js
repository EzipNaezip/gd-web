import { RecoilRoot } from "recoil";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import MainPage from "./Pages/MainPage";
import NavbarComponent from "../src/Components/NavbarComponent.jsx";

function App() {
  return (
    <RecoilRoot>
      <NavbarComponent />
      <section className="content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </section>
    </RecoilRoot>
  );
}

export default App;
