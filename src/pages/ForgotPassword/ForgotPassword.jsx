import { Link } from "react-router-dom";
import { FormLayout } from "../../components/FormLayout/FormLayout";
import "./ForgotPassword.scss";

export const ForgotPassword = () => {
  return (
    <div className="center-everything">
      <FormLayout>
        <div className="wrapper">
          <div className={`login-container`}>
              <h1>Forgot Password</h1>
              <form autoComplete="off" className="login-form">
                <input placeholder="Email" />
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
