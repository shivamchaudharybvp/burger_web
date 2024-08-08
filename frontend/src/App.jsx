import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import{ Toaster } from "react-hot-toast";
import HOME from './pages/home';
import Notfound from './pages/notfound';
import Success from './pages/success';
const App = () => {
  return <Router> 
    <Routes>
      <Route path = "/" element={<HOME/>}/>
      <Route path = "/success" element={<Success/>}/>
      <Route path = "*" element={<Notfound/>}/>

      </Routes>
      <Toaster/>

  </Router>;
  
};
export default App;