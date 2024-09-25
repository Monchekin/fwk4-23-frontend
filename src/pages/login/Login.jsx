import {
  UserAtom,
  PasswordAtom,
  LoginButton,
  HeadLines,
} from "@niklaspelli/fwk4-23-components";

import React, { useState } from "react";
import UserAtom from "./UserAtom";
import PasswordAtom from "./PasswordAtom";
import LoginButton from "./LoginButton";
import HeadLines from "./HeadLines";

// Login Component
const Login1 = ({ loginFunction }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = () => {
    if (loginFunction) {
      loginFunction(user, password);
    } else {
      console.error("No login function provided");
    }
  };

  return (
    <div>
      <HeadLines title="Login Page" />
      <UserAtom onUserChange={setUser} />
      <PasswordAtom onPasswordChange={setPassword} />
      <LoginButton onClick={handleLoginClick} />
    </div>
  );
};

export default Login1;
