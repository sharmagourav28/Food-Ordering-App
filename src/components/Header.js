import { LOGO_URL } from "../utils/constants.js";
import { useState } from "react";
const Header = () => {
  const [loginoutbtn, setloginoutbtn] = useState("Login");
  return (
    <div className="header">
      <div className="logo-conatiner">
        <img className="logo" src={LOGO_URL} alt="logo-image" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Carts</li>
          <button
            className="login-btn"
            onClick={() => {
              loginoutbtn === "Login"
                ? setloginoutbtn("Logout")
                : setloginoutbtn("Login");
              console.log(loginoutbtn);
            }}
          >
            {loginoutbtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
