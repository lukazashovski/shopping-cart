import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="hero">
        <div className="hero-info">
          <h1>we sell skins</h1>
          <p>cs2's #1 skin marketplace</p>
        </div>
        <a href="/shop" className="hero-btn">
          check it out
        </a>
      </div>
    </>
  );
}

export default App;
