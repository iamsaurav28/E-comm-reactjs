
import React from 'react';
import Wishlist from "../Wishlist/Wishlist";
import Cart from '../Cart/Cart';
import Auth from "../Auth/Auth";
import Productscard from '../Productscard/Productscard';
import {Routes, Route} from "react-router-dom";
import Home from '../Home/Home';

const AllRoutes=()=> {
  return (
     <div>
       
       <Routes>
    <Route path="/" element={<Home/>} />
</Routes>

<Routes>
    <Route path="/productscard" element={<Productscard/>} />
</Routes>

<Routes>
    <Route path="/wishlist" element={<Wishlist/>} />
</Routes>
     
<Routes>
    <Route path="/cart" element={<Cart/>} />
</Routes>
<Routes>
    <Route path="/auth" element={<Auth/>} />
</Routes>

     </div>
  )
}

export default AllRoutes;

