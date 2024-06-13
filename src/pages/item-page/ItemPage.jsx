// src/pages/ItemPage/ItemPage.js
import "./ItemPage.css";
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../components/CartContext";

function ItemPage() {
  const itemId = useParams().itemId;
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${itemId}`)
      .then((result) => result.json())
      .then((json) => setItem(json));
  }, [itemId]);

  if (item === null) {
    return (
      <>
        <Navbar />
        <p>Loading...</p>
      </>
    );
  }

  function handleCart() {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItemIndex !== -1) {
      // Update quantity of existing item
      const updatedCart = cart.map((cartItem, index) =>
        index === existingItemIndex
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      // Add new item to cart
      const newItem = { ...item, quantity: quantity };
      const updatedCart = [...cart, newItem];
      setCart(updatedCart);
    }
  }

  return (
    <>
      <Navbar />
      <div className="item-page">
        <img src={item.image} alt={`An image of the ${item.title}`} />
        <div className="item-info">
          <div className="info-top">
            <span>{item.title}</span>
            <span>
              {item.rating.rate} ⭐ - {item.rating.count} Reviews
            </span>
            <span>${item.price}</span>
          </div>
          <div className="info-bottom">
            <div className="quantity-selector">
              <a
                onClick={() =>
                  quantity >= 2 ? setQuantity(quantity - 1) : null
                }
              >
                -
              </a>
              <span>{quantity}</span>
              <a onClick={() => setQuantity(quantity + 1)}>+</a>
            </div>
            <a onClick={() => handleCart()}>Add to Cart</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemPage;
