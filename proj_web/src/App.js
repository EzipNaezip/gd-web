import { RecoilRoot } from 'recoil';
import 'tailwindcss/tailwind.css';
import LoginComponent from './Components/LoginComponent';

function App() {
  return (
    <RecoilRoot>
      <div className="font-suiteMedium">
        <LoginComponent />
      </div>
    </RecoilRoot>
  );
}

export default App;
