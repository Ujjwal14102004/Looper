import React, { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
import Navbar from "../components/Navbar.jsx";

export default function Dashboard() {
  const { user } = useContext(UserContext);

  if (!user) return <p>Please login first.</p>;

  return (
    <>
      <Navbar />
      <h1>Dashboard</h1>
      <p>Welcome, {user.name}</p>
    </>
  );
}
