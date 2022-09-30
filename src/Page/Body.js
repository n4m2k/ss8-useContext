import React, { useContext } from "react";
import "../style.css";
import { CtxUsername } from "../App";
const Body = () => {
  let userName;
  const Username = useContext(CtxUsername);
  const handleInput = (e) => {
    userName = e.target.value;
  };
  const handleButon = () => {
    Username.setUser(userName);
  };
  return (
    <div>
      {Username.user === "" ? (
        <div className="form-login">
          <div className="header-form">Đăng Nhập</div>
          <div className="body-form">
            <input
              className="text-input"
              type="text"
              placeholder="Username..."
              onChange={handleInput}
            ></input>
            <button className="btn-input" onClick={handleButon}>
              Đăng Nhập
            </button>
          </div>
        </div>
      ) : (
        <div className="form-login" style={{ backgroundColor: "#333" }}>
          <span className="hello">CHÀO MỪNG !!!</span>
        </div>
      )}
    </div>
  );
};

export default Body;
