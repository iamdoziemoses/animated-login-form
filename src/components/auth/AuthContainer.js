import React, { useState } from "react";
import "./AuthContainer.scss";
import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";

const AuthContainer = () => {
  const [auth, setAuth] = useState({
    login: true,
    register: false,
    reset: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  // const [login, setLogin] = useState(true);
  // const [register, setRegister] = useState(false);
  // const [reset, setReset] = useState(false);

  const handleLogin = () => {
    setAuth({ login: true, register: false, reset: false });
    // setLogin(true);
    // setRegister(false);
    // setReset(false);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = () => {
    setAuth({ login: false, register: true, reset: false });
    // setLogin(false);
    // setRegister(true);
    // setRest(false);
  };

  const handleReset = () => {
    setAuth({ login: false, register: false, reset: true });
    // setLogin(false);
    // setReset(true);
    // setRegister(false);
  };
  return (
    <section className="--flex-center --100vh">
      <div classname="container box">
        {auth.login && (
          <Login
            onRegister={handleRegister}
            onReset={handleReset}
            onShowPassword={showPassword}
            onTogglePassword={handleTogglePassword}
          />
        )}
        {auth.register && (
          <Register
            onLogin={handleLogin}
            onShowPassword={showPassword}
            onTogglePassword={handleTogglePassword}
          />
        )}
        {auth.reset && <Reset onLogin={handleLogin} />}
      </div>
    </section>
  );
};

export default AuthContainer;
