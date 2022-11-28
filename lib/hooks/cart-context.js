import * as React from "react";

const CartContext = React.createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      return {
        ...state,
        cart: state.cart
          ? { ...state.cart, [action.item.id]: { ...action.item, quantity: 1 } }
          : { [action.item.id]: { ...action.item, quantity: 1 } },
      };
    }
    case "INCREMENT_QUANTITY": {
      return {
        ...state,
        cart: Object.keys(state.cart).map((key) => {
          const item = state.cart[key];
          if (item.id === action.id) {
            return { ...item, quantity: item.quantity + 1 };
          }

          return item;
        }),
      };
    }
    case "DECREMENT_QUANTITY": {
      return {
        ...state,
        cart: Object.keys(state.cart)?.map((key) => {
          const item = state.cart[key];
          if (item.id === action.id) {
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            }
          }

          return item;
        }),
      };
    }
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cart: Object.keys(state.cart)
          .filter((key) => +key !== +action.id)
          .reduce((acc, key) => {
            const item = state.cart[key];
            acc[item.id] = item;
            return acc;
          }, {}),
      };
    }
    case "RESET_CART": {
      return {
        ...state,
        cart: {},
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function CartProvider({ children }) {
  const [state, dispatch] = React.useReducer(cartReducer, { cart: {} });
  const value = { state, dispatch };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

function useCart() {
  const context = React.useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}

export { CartProvider, useCart };
