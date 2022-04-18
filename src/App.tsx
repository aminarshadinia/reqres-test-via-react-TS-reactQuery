import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import LoginPage from './components/login';
import UserListPage from './components/userList';
import AddUserPage from './components/addUser';
import UpdateUserPage from './components/updateUser';
import UserDetailsPage from './components/userDetails';

const App:React.FC = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user-list" element={<UserListPage />} />
        <Route path="/add-user" element={<AddUserPage />} />
        <Route path="/user-details/:id" element={<UserDetailsPage />} />
        <Route path="/update-user/:id" element={<UpdateUserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
