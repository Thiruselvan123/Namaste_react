import { LOGO_URL } from "../utils/constants";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img src={LOGO_URL} className="logo"></img>
    </div>

    <div className="nav-items">
      <ul>Home</ul>
      <ul>Sign in</ul>
      <ul>Cart</ul>
    </div>
  </div>
);

export default Header;
