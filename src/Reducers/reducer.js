
export function reducer(state, { type, payload }) {
  switch (type) {
    case "SET_INITIAL": {
      const newState = JSON.parse(JSON.stringify(state));
      newState.products = JSON.parse(JSON.stringify(payload.data));
      return newState;
    }

    default:
      return state;
  }
}
