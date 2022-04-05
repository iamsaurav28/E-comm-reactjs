
import React from "react";
import Header from "./components/front/Header/Header";
import Routes from "./components/front/Routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/front/Footer/Footer";



function App() {

  return (
  <div>
    <Router>
    <Header />
    <Routes />
    <Footer />
    </Router>
   
  </div>
  );
}

export default App;