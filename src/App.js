import logo from './logo.svg';
import './App.css';
import Banner from './pages/Home/Banner/Banner';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import About from './pages/Home/About/About';
import Navbar from '../src/pages/Navbar/Navbar';
import Blog from './pages/Blog/Blog';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
      </Routes>
    </div>
  );
}

export default App;
