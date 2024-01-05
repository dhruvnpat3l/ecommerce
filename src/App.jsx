// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import Home from './Pages/Home';
import SearchPage from './Pages/SearchPage'
import ProtectedRoute from './utils/ProtectedRoute';
import Header from './components/Header';
import CartPage from './Pages/CartPage';

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    console.log('App component re-rendered');
  }, [isLoggedIn]);

  const renderHeader = () => {
    // Customize the header based on the route and user login status
    if (!isLoggedIn) {
      return null; // Don't render header on the login page
    }
    return <Header />;
  };
  return (
    <div className=' w-screen'>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
          <ProtectedRoute>
          <Home/>
          </ProtectedRoute> }/>
          <Route path='/cart' element={ <ProtectedRoute><CartPage /></ProtectedRoute> } />
           <Route path = '/search/:searchTerm' element ={<ProtectedRoute><SearchPage/></ProtectedRoute>} />
        </Routes> 
      </Router>
    </div>
  
  );
};

export default App;
