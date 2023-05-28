import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { MovieContext, MovieProvider } from "./context/MovieContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <ThemeProvider>
                <MovieProvider>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </MovieProvider>
            </ThemeProvider>
        </AuthProvider>
    </React.StrictMode>
);
