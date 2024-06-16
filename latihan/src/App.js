import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom';
import BaseRoute from './apps/BaseRoute';
import './App.css';
import LayoutInit from './components/LayoutInit';

function App() {
  return (
    <BrowserRouter>
      <LayoutInit>
        <BaseRoute/>
      </LayoutInit>
    </BrowserRouter>
  );
}

export default App;
