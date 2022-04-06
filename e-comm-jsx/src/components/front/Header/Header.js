import React from 'react'
import {Link} from "react-router-dom";
import "./Header.css";
import "../Abstract/Colors.css";
import "../Abstract/Variables.css";

const Header =() =>{
 


  return (
    <header className='header'>
         <div>
              <h1>
                   <Link to="/" className='logo'>
                        SAADGI ZON 
                   </Link>
              </h1>
         </div>
          
         <div className='header-links'>
              <ul>
                   <li>
                        <Link to="/">Home</Link>
                   </li>
              </ul>
              <ul>
                   <li>
                        <Link to="/productscard">Products</Link>
                   </li>
              </ul>
              <ul>
                   <li>
                        <Link to="/wishlist">Wishlist
                        </Link>
                   </li>
              </ul>

              <ul>
                   <li>
                        <Link to="/cart">
                           Cart
                       </Link>
                   </li>
              </ul>
           
              <ul>
                   <li>
                        <Link to="/auth">Auth
                        
                        </Link>

                   </li>
              </ul>


         </div>

    </header>
  )
}

export default Header;