import { Link } from "react-router-dom";
import "./SignupPage.scss";
import { FormLayout } from "../../components/FormLayout/FormLayout";

export const SingupPage = () => {
    return (
        <FormLayout>
            <div className="wrapper">
                <div className={`login-container`}>
                    <div className="top">
                        <h1>Register the Account</h1>
                        <form autoComplete="off" className="login-form">
                            <input placeholder="email" />
                            <input placeholder="password" />
                            <button>Signup</button>
                        </form>
                    </div>
                    <p>
                        Already have a Account?{" "}
                        <Link to="/login">Login now.</Link>
                    </p>
                </div>
            </div>
        </FormLayout>
    );
};
