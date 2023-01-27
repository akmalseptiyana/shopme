import * as React from "react";
import Swal from "sweetalert2";

import { objectKeys } from "./utils/type";

type Action =
  | { type: "ADD_TO_CART"; item: { id: number } }
  | { type: "INCREMENT_QUANTITY"; id: number }
  | { type: "DECREMENT_QUANTITY"; id: number }
  | { type: "REMOVE_FROM_CART"; id: number }
  | { type: "RESET_CART" };
type Dispatch = (action: Action) => void;
export type Product = {
  id: number;
  category: string;
  image: string;
  price: number;
  quantity: number;
  rating: { rate: number; count: number };
  title: string;
};
type State = { cart: {} };
type CartProviderProps = {
  children: React.ReactNode;
};

const CartContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function cartReducer(state: State, action: Action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      Swal.fire({
        text: "Success Add To Cart",
        toast: true,
        position: "top-end",
        background: "#198754",
        color: "#fff",
        timer: 2000,
        showConfirmButton: false,
      });

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
        cart: objectKeys(state.cart).map((key) => {
          const item: Product = state.cart[key];
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
        cart: objectKeys(state.cart).map((key) => {
          const item: Product = state.cart[key];
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
        cart: objectKeys(state.cart)
          .filter((key) => +key !== +action.id)
          .reduce((acc: any, key) => {
            const item: Product = state.cart[key];
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

function CartProvider({ children }: CartProviderProps) {
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
