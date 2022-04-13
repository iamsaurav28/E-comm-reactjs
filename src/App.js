import "./styles.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Listing from "./Components/ProductListing";
import Cart from "./Components/Cart";
import WishList from "./Components/WishList";
import Footer from "./Components/Footer";


export default function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
        <Route path="/" element={<Home />} />
          
          <Route path="/productlisting" element={<Listing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
  
        </Routes>
      </div>
      <Routes>
        <Route><Footer /></Route>
      </Routes>
    </div>
  );
}
function NotFound() {
  return "Not Found 404!";
}
