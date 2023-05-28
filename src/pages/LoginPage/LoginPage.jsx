import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { FormLayout } from "../../components/FormLayout/FormLayout";
import { Header } from "../../components/Header";
import "./LoginPage.scss";

export const LoginPage = () => {
    return (
        <FormLayout>
            <div className="login-container">
                <div className="top">
                    <h1>Sign In</h1>
                    <form autoComplete="off" className="login-form">
                        <input placeholder="email" />
                        <input placeholder="password" />
                        <button>sigin</button>
                        <Link
                            to={"/reset-password"}
                            className="forgot-password"
                        >
                            Forgot Pasword?
                        </Link>
                    </form>
                </div>
                <p className="white-mode">
                    New to Debug Media?{" "}
                    <Link to={"/signup"} className="white-mode">
                        {" "}
                        Sign up now.
                    </Link>
                </p>
            </div>
        </FormLayout>
    );
};
