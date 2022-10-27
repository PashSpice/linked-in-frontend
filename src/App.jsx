import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import NavBar from "./Components/NavBar"
import MyProfile from './Components/MyProfile';
import Profile from './Components/Profile';
import { getFriendsWithThunk } from './app/redux/actions/actions';
import { useEffect } from "react";
import { connect } from "react-redux";
import LogIn from './Components/LogIn';

const mapStateToProps = state => {
  return {
  loadState: state.logic.loading,
  currentUser: state.user.activeUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFriends: username => {
      dispatch(getFriendsWithThunk(username));
    },
  };  
};
function App(props) {
  useEffect(()=>{
    props.getFriends(props.currentUser.username)
  },[props.currentUser]) 
  return (
    <BrowserRouter>
      <Routes>
        {props.currentUser.username === null? <Route path="/" element={<LogIn/>} />: <Route path="/" element={<Home />} />}
        {props.currentUser.username === null? <Route path="/profile" element={<LogIn/>} />: <Route path="/profile" element={<MyProfile />} />}
        {props.currentUser.username === null? <Route path="/profile/:userId" element={<LogIn/>} />: <Route path="/profile/:userId" element={<Profile />} />}
      </Routes>
    {props.currentUser.username !== null? <div><NavBar/></div>:<div></div>}

    </BrowserRouter>
  );
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
