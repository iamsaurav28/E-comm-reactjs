import "./styles.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Listing from "./Components/ProductListing";
import { useCart } from "./cart-context";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Components/Footer";


export default function App() {
  let navigate = useNavigate();
  const { state } = useCart();
  console.log(state)
  useEffect(() => {
    if (state.user.username) {
      navigate("/");
    } else {
      navigate("signin");
    }
  }, [navigate, state.user.username]);
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
        <Route path="/" element={<Home />} />
          
          <Route path="/productlisting" element={<Listing />} />
  
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
