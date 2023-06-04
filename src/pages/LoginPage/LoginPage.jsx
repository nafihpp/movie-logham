import { Link, useNavigate } from "react-router-dom";
import { FormLayout } from "../../components/FormLayout/FormLayout";
import "./LoginPage.scss";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { AuthContext } from "../../context/AuthContext";

export const LoginPage = () => {
    const navigate = useNavigate();
    const { theme } = useContext(ThemeContext);
    const { auth, setAuth } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "test" && password === "test") {
            localStorage.setItem("movie-token", "tokenauthsuccess");
            setAuth(true);
            navigate("/");
        } else {
            alert("wrong credentials");
        }
    };
    return (
        <FormLayout>
            <div className="wrapper">
                <div className={`login-container`}>
                    <div className="top">
                        <h1>Sign In</h1>
                        <form autoComplete="off" className="login-form">
                            <input placeholder="Email" onChange={handleEmail} />
                            <input
                                placeholder="password"
                                onChange={handlePassword}
                            />
                            <button onClick={handleSubmit}>Sigin</button>
                            <Link
                                to="/reset-password"
                                className="forgot-password"
                                style={{ color: theme !== "dark" && "#000" }}
                            >
                                Forgot Pasword?
                            </Link>
                        </form>
                    </div>
                    <p className="bottom-link">
                        New to Movie Logham?{" "}
                        <Link to="/signup">Sign up now.</Link>
                    </p>
                </div>
            </div>
        </FormLayout>
    );
};
