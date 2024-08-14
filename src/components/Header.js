import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants.js";
import { useState, useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Header = () => {
  const [loginoutbtn, setloginoutbtn] = useState("Login");

  const onlinestatus = useOnlineStatus();

  useEffect(() => {
    console.log("Use effect called");
  }, []);

  return (
    <div className="header">
      <div className="logo-conatiner">
        <img className="logo" src={LOGO_URL} alt="logo-image" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Online Status : {onlinestatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
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
