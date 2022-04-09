import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./Reducers/reducer";
import { getProducts } from "./apiCalls";

export const CartContext = createContext();

export const INITIALSTATE = {
  products: [],
  cart: [],
  wishlist: [],
  user: {},
  loader: {
    home: false,
    cart: false,
    wishlist: false
  }
};

export function CartProvider({ children }) {
  const prevData = localStorage.getItem("JWT");
  const InitialState = prevData ? JSON.parse(prevData) : INITIALSTATE;
  const [state, dispatch] = useReducer(reducer, InitialState);
  async function fetchProductsData() {
    dispatch({ type: "TOGGLE_HOME_LOADING", payload: {} });
    const res = await getProducts();
    console.log({ res });
    const data = res?.data.map((item) => {
      const temp = { ...item, id: item._id };
      return temp;
    });
    dispatch({ type: "SET_INITIAL", payload: { data: data } });
    dispatch({ type: "TOGGLE_HOME_LOADING", payload: {} });
  }
  useEffect(() => {
    fetchProductsData();
  }, []);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
