import React, { useContext } from "react";
import "./FormLayout.scss";
import { ThemeContext } from "../../context/ThemeContext";

export const FormLayout = ({ children }) => {
    const { theme } = useContext(ThemeContext);
    return <div className={`form-container ${theme}`}>{children}</div>;
};
