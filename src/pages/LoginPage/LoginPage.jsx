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

    const handleSubmit = () => {
        if (email === "test" && password === "test") {
            localStorage.setItem("token", "10000000000");
            setAuth(true);
            navigate("/");
        } else {
            return;
        }
    };
    return (
        <FormLayout>
            <div className="wrapper">
                <div className={`login-container`}>
                    <div className="top">
                        <h1>Sign In</h1>
                        <form autoComplete="off" className="login-form">
                            <input placeholder="email" onChange={handleEmail} />
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
                    <p>
                        New to Movie Logham?{" "}
                        <Link to="/signup">Sign up now.</Link>
                    </p>
                </div>
            </div>
        </FormLayout>
    );
};
