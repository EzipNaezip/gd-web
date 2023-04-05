import { RecoilRoot } from 'recoil';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import LoginPage from './Pages/LoginPage';
import MainPage from './Pages/MainPage';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <div className="font-suiteMedium">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/main" element={<MainPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
