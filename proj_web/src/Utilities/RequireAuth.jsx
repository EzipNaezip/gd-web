import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export default function RequireAuth({ children }) {
  const myId = sessionStorage.getItem('userId');
  const location = useLocation();

  if (!myId) return <Navigate to="/" state={{ from: location }} replace />;

  return children;
}
