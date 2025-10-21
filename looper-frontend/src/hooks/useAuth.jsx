import { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";

export const useAuth = () => useContext(UserContext);
