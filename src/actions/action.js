export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const REDUCE_QUANTITY = "REDUCE_QUANTITY";
export const CLEAR_CART = "CLEAR_CART";

export function addToCart(foodItem, quantity) {
  return (dispatch, getState) => {
    const { cart } = getState();
    const itemInCart = cart.find((item) => item.id === foodItem.id);

    if (itemInCart) {
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: {
          ...foodItem,
          quantity: itemInCart.quantity + quantity,
        },
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        payload: {
          ...foodItem,
          quantity,
        },
      });
    }
  };
}

export function removeFromCart(foodItem) {
  return {
    type: REMOVE_FROM_CART,
    payload: foodItem,
  };
}

export function reduceQuantity(foodItem) {
  return {
    type: REDUCE_QUANTITY,
    payload: foodItem,
  };
}

export function clearCart() {
  return {
    type: CLEAR_CART,
  };
}
