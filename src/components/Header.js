import myImage from '../images/logo.png';
import { FaShoppingCart } from "react-icons/fa";
import {Link} from "react-router-dom";

const Header = () => {
 
  return (
    <div className="header">
        <div className='logo-container'>
          <img className="logo" alt="logo" src={myImage}></img>
          <h2>Busy-Bee-Tree</h2>
        </div>
        <div className='nav-container'>
          <ul>
            <li><Link to="/gallery"><strong>Gallery</strong></Link></li>
            <li><Link to="/faq"><strong>FAQ</strong></Link></li>
            <li><Link to="/private"><strong>Private Events</strong></Link></li>
            <li><Link to="/menu"><strong>All menus</strong></Link></li>
            <li><Link to="/contact"><strong>Contact Us</strong></Link></li>
            <li><Link to="/cart"><strong><FaShoppingCart /> Cart</strong></Link></li>
          </ul>
        </div>
      </div>
  )
};

export default Header;