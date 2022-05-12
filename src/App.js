import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './component/Login/Login';
import Signup from './component/Signup/Signup';
import Home from './component/Home/Home';
import ManageItems from './component/ManageItems/ManageItems';
import Update from './component/Update/Update';
import AddData from './component/AddData/AddData';
import MyItems from './component/MyItems/MyItems';

function App() {
  return (
    <div className="App">
      <Header></Header>
      
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/manage' element={<ManageItems></ManageItems>}></Route>
        <Route path='/update/:id' element={<Update></Update>}></Route>
        <Route path='/add' element={<AddData></AddData>}></Route>
        <Route path='/myitems' element={<MyItems></MyItems>}></Route>
      </Routes>
    </div>
  );
}

export default App;
