import React from "react";

const LoginContext = React.createContext({
  showLogin: "",
  setShowLogin: () => {},
});

export default LoginContext;
