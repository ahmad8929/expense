import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Home from "./pages/DashBoard/Home";
import Expense from "./pages/DashBoard/Expense";
import Income from "./pages/DashBoard/Income";
import UserProvider from './context/UserContext';

const App = () => {
  return (
    <UserProvider>
      <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/dashboard" exact element={<Home />} />
          <Route path="/expense" exact element={<Expense />} />
          <Route path="/income" exact element={<Income />} />
        </Routes>
      </Router>
      </div>
    </UserProvider>
  )
}

export default App;

const Root = () => {
  // Check token exist
  const isAuthenticated = !!localStorage.getItem("token");
  return isAuthenticated ? (<Navigate to="/dashboard" />) : (<Navigate to="/login" />)
}
