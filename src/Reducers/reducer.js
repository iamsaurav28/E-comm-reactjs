
export function reducer(state, { type, payload }) {
  switch (type) {
    case "SET_INITIAL": {
      const newState = JSON.parse(JSON.stringify(state));
      newState.products = JSON.parse(JSON.stringify(payload.data));
      return newState;
    }

    case "ADD_TO_WISHLIST": {
      const newState = JSON.parse(JSON.stringify(state));
      if (state.wishlist.includes(payload.id)) {
        return newState;
      }
      newState.wishlist.push(payload.id);
      localStorage.setItem("JWT", JSON.stringify(newState));
      return newState;
    }
    case "REMOVE_FROM_WISHLIST": {
      const newState = JSON.parse(JSON.stringify(state));
      if (state.wishlist.includes(payload.id)) {
        newState.wishlist = newState.wishlist.filter((id) => id !== payload.id);
      }
      localStorage.setItem("JWT", JSON.stringify(newState));
      return newState;
    }

    default:
      return state;
  }
}
