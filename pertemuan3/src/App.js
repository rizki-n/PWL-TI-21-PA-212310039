import './App.css';
import LayoutInit from './components/LayoutInit';
import { BrowserRouter } from 'react-router-dom';
import BaseRoute from './apps/BaseRoute';

function App() {
  // const createSessionStorage = () => {
  //   sessionStorage.setItem('token', '1234');
  //   alert('success save token to sessionStorage');
  // }

  // const removeSessionStorage = () => {
  //   sessionStorage.removeItem('token');

  // }

  // const createTokenStorage = () => {}
  
  return (
  // <>
  //   <h1>Session Storage</h1>
  //   <button onClick={createSessionStorage}>set token sessionStorage</button>
    
  //   <button onClick={removeSessionStorage}>remove token sessionStorage</button>

  //   <h1>Local Storage</h1>
  //   <button onClick={''}>set token localStorage</button>
    
  // </>  
    
   <BrowserRouter>
     <LayoutInit>
       <BaseRoute />
     </LayoutInit>
   </BrowserRouter>

  );
}

export default App;
