
export function reducer(state, { type, payload }) {
  switch (type) {
    case "SET_INITIAL": {
      const newState = JSON.parse(JSON.stringify(state));
      newState.products = JSON.parse(JSON.stringify(payload.data));
      return newState;
    }case "ADD_TO_CART": {
      const newState = JSON.parse(JSON.stringify(state));
      const idx = state.cart.findIndex((el) => el.id === payload.id);
      if (idx === -1) {
        newState.cart.push({ id: payload.id, quantity: 1 }); //adding
        localStorage.setItem("JWT", JSON.stringify(newState));
        return newState;
      }
      newState.cart[idx].quantity += 1;
      localStorage.setItem("JWT", JSON.stringify(newState));
      return newState;
    }
    case "INCREMENT_IN_CART": {
      const newState = JSON.parse(JSON.stringify(state));
      newState.cart[payload.idx].quantity += 1;
      localStorage.setItem("JWT", JSON.stringify(newState));
      console.log(newState);
      return newState;
    }
    case "REMOVE_FROM_CART": {
      const newState = JSON.parse(JSON.stringify(state));
      const idx = state.cart.findIndex((el) => el.id === payload.id);
      if (idx === -1) {
        return newState;
      }
      if (state.cart[idx].quantity === 1) {
        newState.cart.splice(idx, 1);
        localStorage.setItem("JWT", JSON.stringify(newState));
        return newState;
      }
      newState.cart[idx].quantity--; //decrementing
      localStorage.setItem("JWT", JSON.stringify(newState));
      return newState;
    }

    default:
      return state;
  }
}
