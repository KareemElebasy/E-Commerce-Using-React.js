import './style.css'
import { Link } from "react-router-dom";
function Navbar() {
  return <div className="navbar container d-flex">
    <h1>ZOSAR STORE</h1>
    <ul className="d-flex">
    <li><Link to="/">HOME</Link> </li>
    <li><Link to="/shop">SHOP</Link> </li>
    <li><Link to="/about">ABOUT</Link> </li>
    {/* <li><link to="">CART</link> </li> */}
</ul>

  </div>;
}

export default Navbar;
