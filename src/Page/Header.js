import React, { useContext } from "react";
import "../style.css";
import { CtxUsername } from "../App";

const Header = () => {
  const username = useContext(CtxUsername);
  return (
    <div>
      {username.user === "" ? (
        <div className="header">
          <span className="mindx">MindX</span>{" "}
          <span className="login">Login</span>
        </div>
      ) : (
        <div className="header">
          <span className="mindx">MindX</span>{" "}
          <span className="login">Welcome, {username.user}</span>
        </div>
      )}
    </div>
  );
};

export default Header;
