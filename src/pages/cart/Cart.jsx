import "./Cart.css";
import Navbar from "../../components/Navbar/Navbar";
import { useContext } from "react";
import { CartContext } from "../../components/CartContext";

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  // Initialize and calculate total price
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  function PayUp() {
    alert("oopsie doopsie!!! err message: ur too poor");
  }

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    setCart(updatedCart);
  };

  return (
    <>
      <Navbar />
      <div className="cart-page">
        <h1>Your Shopping Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className="cart-container">
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} />
                  <div className="item-info">
                    <p>{item.title}</p>
                    <p>
                      Quantity:{" "}
                      <a
                        className="quantity-btn"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </a>{" "}
                      {item.quantity}{" "}
                      <a
                        className="quantity-btn"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </a>
                    </p>
                    <p>Price: ${item.price}</p>
                  </div>
                  <p>Total: ${item.quantity * item.price}</p>
                </div>
              ))}
            </div>
            <div className="checkout">
              <p>time to pay up fool</p>
              <p>Total: ${totalPrice.toFixed(2)}</p>{" "}
              {/* Fixed to display the correct total */}
              <a
                href="https://www.youtube.com/watch?v=umDr0mPuyQc"
                target="_blank"
                className="purchase-btn"
                onClick={() => PayUp()}
              >
                pay up
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
