import Homepage from "./homepage/homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Headers from "./homepage/headers";
import Paket1 from "./jenisPaket/paket1";
import Paket2 from "./jenisPaket/paket2";
import Paket3 from "./jenisPaket/paket3";
import AdminPage from "./adminPage/adminPage";
//import './App.css';

function App() {
  return (
    <>
      <Router>
        <Headers />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='paket1' element={<Paket1/>} />
          <Route path='paket2' element={<Paket2/>} />
          <Route path='paket3' element={<Paket3/>} />
          <Route path='admin' element={<AdminPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
