import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const ProtectedAfterLogin = () => {
    const { auth } = useContext(AuthContext);
    if (auth) {
        return <Navigate to="/" />;
    }

    return <Outlet />;
};
