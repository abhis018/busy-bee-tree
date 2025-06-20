import {Link} from "react-router-dom";
import { MdOutlineLocalDining } from "react-icons/md";
import { IoCashOutline } from "react-icons/io5";
import { useState } from "react";
import myImage from '../images/logo.png';

const Private = () => {
  const [showMore, setShowMore] = useState(false);
  const [more, setMore] = useState(false);
  const [far, setFar] = useState(false);
  
  
  return (
    <div className="private">
        <div className="logo-box">
            <div className='logo-container'>
              <Link to="/">
                <img className="logo" alt="logo" src={myImage}></img>
              </Link>
              <h2>Busy-Bee-Tree</h2>
            </div>
        </div>
        <div className="reservation-box">
          <p>RESERVATION</p>
          <h2>The Busy Bee Tree</h2>
          <p>A spacious open-air setting surrounded by lush greenery, </p>
          {!showMore ? "..." : "perfect for relaxing, casual gatherings, or enjoying nature’s calm with your favorite drink. "}
          <button className="more-btn" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Read less" : "Read more"}
          </button>
          <p><MdOutlineLocalDining /> Prepaid reservation for parties of 4 to 6</p>
          <p><IoCashOutline /> $495 per person + add-ons</p>
        </div>
        <div className="reservation-box">
          <p>RESERVATION</p>
          <h2>The Busy Bee Tree</h2>
          <p>A beautifully landscaped space filled with vibrant flowers </p>
          {!more ? "..." : " and serene pathways, offering a peaceful ambiance ideal for quiet conversations and cozy moments."}
          <button className="more-btn" onClick={() => setMore(!more)}>
            {more ? "Read less" : "Read more"}
          </button>
          <p><MdOutlineLocalDining /> Prepaid reservation for parties of 2 to 4</p>
          <p><IoCashOutline /> $435–$495 per person + add-ons</p>
        </div>
        <div className="reservation-box">
          <p>RESERVATION</p>
          <h2>The Busy Bee Tree</h2>
          <p>Reserve your favorite spot in advance to enjoy a </p>
          {!far ? "..." : "seamless dining experience—whether it's a romantic dinner, a family meal, or a hangout with friends."}
          <button className="more-btn" onClick={() => setFar(!far)}>
            {far ? "Read less" : "Read more"}
          </button>
          <p><MdOutlineLocalDining /> Prepaid reservation for parties of 1 to 6</p>
          <p><IoCashOutline /> $295–$395 per person + add-ons</p>
        </div>
    </div>
  )
};

export default Private;
