import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/LoginSignup/login';
import SignUp from './components/LoginSignup/signup';
import Dashboard from './components/LoginSignup/dashboard'; 

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Optional: Catch-all route */}
          <Route path="*" element={<Login />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
