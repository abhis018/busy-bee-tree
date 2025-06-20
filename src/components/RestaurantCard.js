const RestaurantCard = ({ item, categoryName, image }) => {
  return (
    <div className='res-card'>
      <img className="res-card-logo" alt="res-logo" src={`/images/${image}`} />
      <div className="res-desc">
        <div className="name-price">
        <h5 className="name">{item.name}</h5>
        <h5 className="price">₹{item.price}</h5>
      </div>
      <div className="desc">
        <h5>{item.description}</h5>
        <div className="add-minus-btn">
          <button>+</button>
          <button>-</button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default RestaurantCard;
