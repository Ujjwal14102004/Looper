import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router.jsx";
import { UserProvider } from "./context/UserContext.jsx";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
