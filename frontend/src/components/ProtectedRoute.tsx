import { Navigate } from "react-router-dom";
import React from "react";

interface Props {
  children: React.ReactElement;
}

function ProtectedRoute({ children }: Props) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;