import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import About from './pages/Home/About/About';
import Navbar from '../src/pages/Navbar/Navbar';
import Parts from './pages/Details/Parts';
import House from './pages/Details/House';
import Gym from './pages/Details/Gym';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/more' element={<About></About>}></Route>
        <Route path='/parts' element={<Parts></Parts>}></Route>
        <Route path='/house' element={<House></House>}></Route>
        <Route path='/gym' element={<Gym></Gym>}></Route>
      </Routes>
    </div>
  );
}

export default App;
