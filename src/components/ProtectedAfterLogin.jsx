import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedAfterLogin = () => {
    const token = localStorage.getItem("token");
    if (!token) {
        return <Outlet />;
    }

    return <Navigate to="/homepage" />;
};
