import { Link } from "react-router-dom";
import "./SignupPage.scss";
import { FormLayout } from "../../components/FormLayout/FormLayout";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

export const SingupPage = () => {
    const { theme } = useContext(ThemeContext);
  return (
    <div className="center-everything">
      <FormLayout>
        <div className="wrapper">
          <div className={`login-container`}>
            <div className="top">
              <h1>Register</h1>
              <form autoComplete="off" className="login-form">
                <input placeholder="email" style={{ background : theme !== "dark" ? "aliceblue" : "#333333"}}/>
                <input placeholder="password" style={{ background : theme !== "dark" ? "aliceblue" : "#333333"}} />
                <button>Signup</button>
              </form>
            </div>
            <p>
              Already have a Account? <Link to="/login">Login now.</Link>
            </p>
          </div>
        </div>
      </FormLayout>
    </div>
  );
};
