import React, { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const ProtectedAfterLogin = () => {
    const { auth, setAuth } = useContext(AuthContext);
    const token = localStorage.getItem("movie-token");

    useEffect(() => {
        if (token) {
            setAuth(true);
        } else {
            setAuth(false);
        }
    }, [token, setAuth]);

    return auth ? <Navigate to="/" /> : <Outlet />;
};