import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/LoginSignup/login';
import SignUp from './components/LoginSignup/signup';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            {/* You can set a default route (e.g., '/') if needed */}
            <Route path='/' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

