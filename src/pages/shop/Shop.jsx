import "./Shop.css";
import Navbar from "../../components/Navbar/Navbar";
import ShopItem from "../../components/ShopItem/ShopItem";
import { useState, useEffect } from "react";

function Shop() {
  const [shopItems, setShopItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((response) => response.json())
      .then((json) => {
        setShopItems([...json]);
      });
  }, []);

  if (shopItems === null) {
    return (
      <>
        <Navbar />
        <p>Loading...</p>
      </>
    );
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="shop-items">
        {shopItems.map((item, index) => (
          <ShopItem
            itemId={item.id}
            key={index}
            itemImg={item.image}
            itemPrice={`$${item.price}`}
            itemRating={item.rating.rate}
            ratingCount={item.rating.count}
            itemTitle={item.title}
          ></ShopItem>
        ))}
      </div>
    </>
  );
}

export default Shop;
