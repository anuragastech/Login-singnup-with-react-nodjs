import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/LoginSignup/login';
import SignUp from './components/LoginSignup/signup';
import Dashboard from './components/LoginSignup/dashboard'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard/>} /> 
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
