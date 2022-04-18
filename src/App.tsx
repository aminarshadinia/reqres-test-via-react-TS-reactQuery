import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import AddUserPage from './pages/AddUserPage';
import LoginPage from './pages/LoginPage';
import UpdateUserPage from './pages/UpdateUserPage';
import UserDetailsPage from './pages/UserDetailsPage';
import UserListPage from './pages/UserListPage';

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
