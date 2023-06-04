import React, { useContext } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const ProtectedAfterLogin = () => {
    const { setAuth } = useContext(AuthContext);
    const token = localStorage.getItem("movie-token");
    token ? setAuth(true) : setAuth(false);
    return token ? <Navigate to="/" /> : <Outlet />;
};
