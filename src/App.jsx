import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import NavBar from "./Components/NavBar"
import MyProfile from './Components/MyProfile';
import Profile from './Components/Profile';


function App() {

  return (
    <BrowserRouter>
    <div><NavBar/></div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/profile/:userId" element={<Profile />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
