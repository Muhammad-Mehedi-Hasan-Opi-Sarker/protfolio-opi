import logo from './logo.svg';
import './App.css';
import Banner from './pages/Home/Banner/Banner';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import About from './pages/Home/About/About';
import Navbar from '../src/pages/Navbar/Navbar';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
