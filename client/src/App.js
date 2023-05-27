import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './login/login';
import Home from './home/home';
import Register from './register/register';
import AfterLogin from './afterLogin/afterLogin';
import Services from './services/services';
import Address from './address/address';
import Adrsque from './address/adrsQue';
import AdrsUpdate from './address/adrsUpdate';
import Belge from './belgedogrula/belge';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path='home' element={<AfterLogin />} />
        <Route path="register" element={<Register />} />
        <Route path="services" element={<Services />} />
        <Route path='address' element={<Address />} />
        <Route path='addressQuestion' element={<Adrsque />} />
        <Route path='addressUpdate' element={<AdrsUpdate />} />
        <Route path='belgeDogrulama' element={<Belge />} />
      </Routes>
    </Router>
  );
}

export default App;
