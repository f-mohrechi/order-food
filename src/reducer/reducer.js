import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REDUCE_QUANTITY,
  CLEAR_CART,
} from "../actions/action";

const initialState = {
  cart: [],
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case REDUCE_QUANTITY:
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0),
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
}
