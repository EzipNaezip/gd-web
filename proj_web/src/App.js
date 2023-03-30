import './App.css';
import LoginComponent from './Component/LoginComponent';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <LoginComponent />
    </RecoilRoot>
  );
}

export default App;
