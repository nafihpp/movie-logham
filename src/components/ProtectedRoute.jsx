import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const ProtectedRoute = () => {
    const { auth } = useContext(AuthContext);
    if (!auth) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
};
