import "../styles.css";
import { productsReducer } from "../Reducers/productsReducer";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../cart-context";
import { Filter } from "./Filter";
import Loader from "react-loader-spinner";
import { getFilteredData, getSortedData, initialState } from "./helper";

export default function Listing() {
  const { state } = useCart();
  const [
    { showInventoryAll, showFastDeliveryOnly, sortBy },
    dispatchProducts
  ] = useReducer(productsReducer, initialState);

  const sortedData = getSortedData(state.products, sortBy);
  const filteredData = getFilteredData(sortedData, {
    showFastDeliveryOnly,
    showInventoryAll
  });
  if (state.products.length === 0) {
    return (
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        <Loader type="Puff" color="#00BFFF" height={80} width={80} />;
      </div>
    );
  }
  return (
    <div className="home">
      <Filter
        dispatchProducts={dispatchProducts}
        sortBy={sortBy}
        showFastDeliveryOnly={showFastDeliveryOnly}
        showInventoryAll={showInventoryAll}
      />
      <div className="products">
        <h1>Our Products</h1>
        <ul className="cards">
          {filteredData.map((item) => {
            let cartcondn = state.cart.find((el) => el.id === item.id);
            let condn = state.wishlist.includes(item.id);
            let btn_class = condn ? "icon-btn-red" : "icon-btn";
            let btn_type = condn ? "favorite" : "favorite_border";
            return (
              <Product
                key={item.id}
                item={item}
                condn={condn}
                cartcondn={cartcondn}
                btn_class={btn_class}
                btn_type={btn_type}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

const Product = ({ item, condn, cartcondn, btn_class, btn_type }) => {
  const { dispatch } = useCart();

  const handleWishlist = (condn, id) => {
    if (condn) {
      dispatch({ type: "REMOVE_FROM_WISHLIST", payload: { id } });
    } else {
      dispatch({ type: "ADD_TO_WISHLIST", payload: { id } });
    }
  };
  
  const handleAddToCart = (id) => {
    dispatch({ type: "ADD_TO_CART", payload: { id } });
  };
  return (
    <li className="cards-item" key={item.id}>
      <div className="card">
        <>
          <img src={item.image} alt="randomimage" />
          <button
            className={btn_class}
            onClick={() => handleWishlist(condn, item.id)}
          >
            <i className="material-icons-outlined md-36">{btn_type}</i>
          </button>
        </>
        <div className="card-content">
          <h2 className="card-title">{item.name}</h2>
          <div className="card-text">
            Price in Rs: <strong>{item.price}</strong>
          </div>
          {item.inStock ? (
            <div>In Stock</div>
          ) : (
            <div>
              <strong>Out Of Stock</strong>
            </div>
          )}
          {item.fastDelivery ? (
            <div>Fast Delivery</div>
          ) : (
            <div>3 Days Minimum</div>
          )}
          {!cartcondn ? (
            <button
              disabled={!item.inStock}
              style={
                !item.inStock
                  ? {
                      cursor: "not-allowed",
                      backgroundColor: "#6f6eaf"
                    }
                  : {}
              }
              className="btn btn-primary"
              onClick={() => handleAddToCart(item.id)}
            >
              Add to Cart
            </button>
          ) : (
            <div>
              <Link
                to="cart"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <button className="btn btn-link">Go to Cart</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};
