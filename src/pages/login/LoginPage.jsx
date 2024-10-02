import { Login } from "@niklaspelli/fwk4-23-components";
import { useState } from "react";
import { newMockUsers } from "../../../data/MockMembers";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [userId, setUserId] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const loginFunction = (username, password) => {
    const user = newMockUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setUserId(user.userId);
      setError(null);
      console.log("Login success", user.userId);
      navigate("/profile");
    } else {
      setError("invalid");
      console.log("login failed");
    }
  };

  return (
    <>
      <Login loginFunction={loginFunction} error={error} />
      {userId && <p>logged in user id {userId}</p>}
      <div style={{ textAlign: "center" }}>
        <p style={{ color: "white" }}>Don´t have an account?</p>
        <Link to="./register">Register here</Link>
      </div>
    </>
  );
};

export default LoginPage;
