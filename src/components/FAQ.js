import {Link} from "react-router-dom";
import myImage from '../images/logo.png';

const FAQ = () => {

  return (
    <div className="faq">
      <div className="logo-box">
        <div className='logo-container'>
          <Link to="/">
            <img className="logo" alt="logo" src={myImage}></img>
          </Link>
          <h2>Busy-Bee-Tree</h2>
        </div>
      </div>
    </div>
  )
};

export default FAQ;