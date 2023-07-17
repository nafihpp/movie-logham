import { Link } from "react-router-dom";
import { FormLayout } from "../../components/FormLayout/FormLayout";
import "./ForgotPassword.scss";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const ForgotPassword = () => {
 const { theme } = useContext(ThemeContext);
  return (
    <div className="center-everything">
      <FormLayout style={{ minWidth :"40%"}}>
        <div className="wrapper">
          <div className={`login-container`}>
              <h1>Forgot Password</h1>
              <form autoComplete="off" className="login-form">
                <input placeholder="Email" style={{ background : theme !== "dark" ? "aliceblue" : "#333333"}} />
                <button>Reset</button>
              </form>
            <p>
              Remember Password? <Link to="/login">Login now.</Link>
            </p>
          </div>
        </div>
      </FormLayout>
    </div>
  );
};
