import React, { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";

export default function Login() {
  const { login } = useContext(UserContext);

  const handleLogin = () => {
    login({ name: "Ujjwal" }); // Dummy login
  };

  return (
    <>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </>
  );
}
