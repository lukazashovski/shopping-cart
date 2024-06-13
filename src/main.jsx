import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import AboutUs from "./pages/about-us/AboutUs.jsx";
import Shop from "./pages/shop/Shop.jsx";
import Cart from "./pages/cart/Cart.jsx";
import ItemPage from "./pages/item-page/ItemPage.jsx";
import { CartProvider } from "./components/CartContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about-us",
    element: <AboutUs />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
  { path: "shop/:itemId", element: <ItemPage /> },
  {
    path: "cart",
    element: <Cart />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
