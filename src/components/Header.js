import { LOGO_URL } from "../utils/constants.js";
const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
