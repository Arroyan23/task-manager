// halaman untuk memproteksi ke amanan

import React from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  
  return !!token; // True jika token ada
};

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    // Jika tidak ada token, redirect ke halaman login
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
