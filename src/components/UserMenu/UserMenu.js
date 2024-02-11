import React from 'react';
import axios from 'axios';

const UserMenu = ({ userEmail, handleLogout }) => {
  const handleLogoutClick = async () => {
    try {
      await axios.post('https://connections-api.herokuapp.com/users/logout');
      handleLogout();
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div>
      <p>{userEmail}</p>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
};

export default UserMenu;
