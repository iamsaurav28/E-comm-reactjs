
import React from 'react';
import Wishlist from "../Wishlist/Wishlist";
import Cart from '../Cart/Cart';
import Auth from "../Auth/Auth";
import Productscard from '../Productscard/Productscard';
import {Route, Switch} from "react-router-dom";
import Home from '../Home/Home';

const Routes=()=> {
  return (
     <div>
       <Switch>
            <Route path="/" exact>
                 <Home/>
            </Route>
            <Route path="/productscard" exact>
                 <Productscard/>
            </Route>

            <Route path="/wishlist" exact>
                 <Wishlist/>
            </Route>
            
            <Route path="/cart" exact>
                 <Cart/>
            </Route>
            <Route path="/auth" exact>
                 <Auth/>
            </Route>
       </Switch>
     </div>
  )
}

export default Routes;

