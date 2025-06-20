import {Link} from "react-router-dom";
import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import myImage from '../images/logo.png';


const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const Menu = () => {
  const [restaurantData, setRestaurantData] = useState(null);

  useEffect(() => {
    fetch('/mockdata.json')
      .then((res) => res.json())
      .then((data) => setRestaurantData(data.restaurant))
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  if (!restaurantData) return <p>Loading...</p>;


  const shuffledItems = shuffleArray(
    restaurantData?.categories?.flatMap((category) =>
      category.items.map((item) => ({
        ...item,
        categoryName: category.categoryName,
        image: category.image
      }))
    )
  );




  return (
    <div className="menu">
      <div className="logo-box">
        <div className='logo-container'>
          <Link to="/">
            <img className="logo" alt="logo" src={myImage}></img>
          </Link>
          <h2>Busy-Bee-Tree</h2>
        </div>
      </div>
      <div className="menu-body">
        <div className='filter'>
          {/* <div className='search'>
              <input type='text' placeholder='Search.....' className='search-box'></input>
              <button className="search-btn">
                  Search
              </button>
          </div> */}
          <div className="filter">
            <button>All</button>
            <button>Snacks</button>
            <button>Sandwiches & Rolls</button>
            <button>Burgers</button>
            <button>Maggie</button>
            <button>Chai & Coffee</button>
            <button>Cold Beverages</button>
            <button>Desserts</button>
            <button>Combos</button>
          </div>
        </div>
        <div className='res-container'>
          {shuffledItems.map((item) => (
            <RestaurantCard key={item.id} item={item} categoryName={item.categoryName} image={item.image}/>
          ))}
        </div>
      </div>
    </div>
  )
};

export default Menu;






