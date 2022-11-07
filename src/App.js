
import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import Routing from './Routing';
import Sidebar from './Sidebar';
import Oreders from './Oreders';
import Logout from './Logout';
import Grid from './Grid';
import List from './List';
import Add from './Add';
import Login from './Login';
import Nav from './Nav';
import Gridview from './Grid';
import Edituser from './Edituser';




function App() {
  return (
    <>
     
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/customer" element={<Sidebar/>}/>
        <Route path='/grid' element={<Gridview/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/add'  element={<Add/>}/>
        <Route path='/order' element={<Oreders/>}/>
        <Route path ='/edit/:uid' element={<Edituser/>}/>
        <Route path="/"  element={<Logout/>}/>
        
          

      </Routes>
    </>
  );
}

export default App;
