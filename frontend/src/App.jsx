import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx"
import Login from "./Account/Login.jsx"
import SignUp from "./Account/SignUp.jsx"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
