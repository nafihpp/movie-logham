import { Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
import "./styles/global.scss";
import { LoginPage } from "./pages/LoginPage";
import { SingupPage } from "./pages/SignupPage";
import { HomePage } from "./pages/HomePage";
import { ForgotPassword } from "./pages/ForgotPassword";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { MoviePage } from "./pages/MoviePage/MoviePage";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import { ProtectedAfterLogin } from "./components/ProtectedAfterLogin";

function App() {
  let location = useLocation();

  useEffect(() => {
    nprogress.start();
    nprogress.done();
  }, [location.pathname]);

  return (
    <div className="app">
      <Header />
      <div className="center-h">
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie/:id" element={<MoviePage />} />
          </Route>
          <Route element={<ProtectedAfterLogin />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SingupPage />} />
            <Route path="/reset-password" element={<ForgotPassword />} />
          </Route>
          <Route
            path="*"
            element={<h1 className="page-not-found">404 Error Not Found</h1>}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
