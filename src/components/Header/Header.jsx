import { Link } from "react-router-dom";
import { LoginPage } from "../../pages/LoginPage";
import "./Header.scss";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { AuthContext } from "../../context/AuthContext";
import logo from "../../assets/logo.png";

export const Header = () => {
    const { auth, setAuth } = useContext(AuthContext);
    const { theme, toggleTheme } = useContext(ThemeContext);

    const signOut = () => {
        setAuth(false);
        localStorage.clear("movie-token");
    };

    return (
        <header className={theme !== "dark" && theme}>
            <div className="logo">
                <span>
                    <img src={logo} alt="logo-icon" />
                </span>
                MOVIE LOGHAM
            </div>
            <div className="header-right-container">
                <div className="dark-light-container" onClick={toggleTheme}>
                    <button
                        style={{
                            border: theme !== "dark" && "1px solid black",
                            borderRadius: "4px",
                        }}
                    >
                        {theme === "dark" ? (
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 16 16"
                                height="20"
                                width="20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
                            </svg>
                        ) : (
                            <svg
                                stroke="currentColor"
                                fill="#000"
                                strokeWidth="0"
                                viewBox="0 0 16 16"
                                height="20"
                                width="20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
                            </svg>
                        )}
                    </button>
                </div>
                <div className="logout-botton">
                    {auth === true ? (
                        <button
                            onClick={signOut}
                            style={{
                                border: theme !== "dark" && "1px solid black",
                                color: theme !== "dark" && "black",
                                borderRadius: "4px",
                            }}
                        >
                            Logout
                        </button>
                    ) : (
                        <Link
                            to="/"
                            className="link"
                            style={{
                                border: theme !== "dark" && "1px solid black",
                                color: theme !== "dark" && "black",
                                borderRadius: "4px",
                            }}
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};
