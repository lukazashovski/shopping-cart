import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="hero">
        <div className="hero-info">
          <h1>we sell stuff</h1>
          <p>the #1 marketplace</p>
        </div>
        <Link to="/shop" className="hero-btn">
          check it out
        </Link>
      </div>
    </>
  );
}

export default App;
