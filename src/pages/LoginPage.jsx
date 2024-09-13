import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const LoginPage = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();

    let from = location.state?.from?.pathname || "/";
    let formData = new FormData(event.currentTarget);
    let username = formData.get("username");

    auth.login(username, () => {
      navigate(from, {replace: true});
    });
  }

  return (
    <div>
      <h1>LoginPage</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" type="text" />
        </label>{" "}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;