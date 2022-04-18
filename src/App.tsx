import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import LoginPage from './components/login';
import UserListPage from './components/userList';
import AddUserPage from './components/addUser';

const App:React.FC = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user-list" element={<UserListPage />} />
        <Route path="/add-user" element={<AddUserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
