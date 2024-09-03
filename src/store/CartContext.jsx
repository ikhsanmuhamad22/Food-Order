import { createContext, useReducer } from 'react';

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    const existingItemsCartIndex = state.items.findIndex((item) => {
      item.id === action.item.id;
    });

    const updatedItems = [...state.items];

    if (existingItemsCartIndex > -1) {
      const existingItem = state.items[existingItemsCartIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingItemsCartIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === 'REMOVE_ITEM') {
    // remove the item cart
  }

  return state;
}

function CartContextProvider() {
  useReducer(cartReducer);
  return <CartContext.Provider></CartContext.Provider>;
}
