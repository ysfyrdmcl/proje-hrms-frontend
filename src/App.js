
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import User from './pages/User';
import ViewUser from './users/ViewUser';
import Profile from './pages/Profile';
import Aboutus from './pages/Aboutus';
import Contact from './pages/Contact';
import Login from   './pages/Login'
import {useSelector} from 'react-redux';





function App() {
  const isLogin = useSelector((state)=>state.auth.isAuthenticated);
  return (
    
    <div className="App">
      
      <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route path='/' element={isLogin ? <Home/> : <Login/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/aboutus" element={<Aboutus />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
        </Routes>
       
     </BrowserRouter>

    </div>
  );
}

export default App;
