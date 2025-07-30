import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [loginButton, setloginButton] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} className="logo"></img>
      </div>

      <div className="nav-items">
        <ul>Home</ul>
        <ul>Sign in</ul>
        <ul>Cart</ul>
        <ul>
          <button
            className="login-btn"
            onClick={() => {
              loginButton == "Login"
                ? setloginButton("Logout")
                : setloginButton("Login");
            }}
          >
            {loginButton}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
