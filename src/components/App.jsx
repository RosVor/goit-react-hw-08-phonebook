import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';
import UserMenu from './UserMenu/UserMenu';
import ContactForm from './ContactForm/ContactForm'; 
import ContactList from './ContactList/ContactList';
import axios from 'axios';
import './ContactForm/ContactForm.css';
import './ContactList/ContactList.css';
import './Filter/Filter.css';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (userData) => {
    setCurrentUser(userData);
  };

  const handleRegister = (userData) => {
    setCurrentUser(userData);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  const getUserInfo = async () => {
    try {
      const response = await axios.get('https://connections-api.herokuapp.com/users/current');
      setCurrentUser(response.data);
    } catch (error) {
      console.error('Error fetching current user:', error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <Router>
      <div className="app">
        <Navigation />
        {currentUser ? (
          <UserMenu userEmail={currentUser?.email} handleLogout={handleLogout} />
        ) : (
          <Routes>
            <Route path="/login" element={<LoginForm handleLogin={handleLogin} />} />
            <Route path="/register" element={<RegisterForm handleRegister={handleRegister} />} />
            <Route path="/*" element={<Navigate to="/login" />} />
          </Routes>
        )}
        {currentUser && (
          <Routes>
            <Route path="/contacts" element={<ContactList />} />
            <Route path="/add-contact" element={<ContactForm />} />
            <Route path="/*" element={<Navigate to="/contacts" />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
