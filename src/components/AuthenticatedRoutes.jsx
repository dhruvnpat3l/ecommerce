// AuthenticatedRoutes.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from '../Pages/Home';
import SearchPage from '../Pages/SearchPage';
import Hello from './Hello';


const AuthenticatedRoutes = () => {
  return (
    <div className='bg-[#f4f4f0] w-screen'>
      <Header />
   
      <Routes >
        <Route path="/hello" element={<Home />} />
        <Route path="/search/:searchTerm" element={<SearchPage />} />
        <Route path='/hello' element={<Hello/>}/>
      </Routes>
    </div>
  );
};

export default AuthenticatedRoutes;
