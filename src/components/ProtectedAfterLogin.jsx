import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const ProtectedAfterLogin = () => {
    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    return token ? navigate(-1) : <Outlet />;
};
