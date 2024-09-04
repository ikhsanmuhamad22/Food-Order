import { createContext, useReducer } from 'react';

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    const existingItemsCartIndex = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });
    const updatedItems = [...state.items];
    if (existingItemsCartIndex > -1) {
      console.log('yes');
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
    const existingItemsCartIndex = state.items.findIndex((item) => {
      return item.id === action.id;
    });
    const updatedItems = [...state.items];
    if (existingItemsCartIndex === 1) {
      const existingItem = state.items[existingItemsCartIndex];
      updatedItems.slice(existingItem, 1);
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updatedItems[existingItemsCartIndex] = updatedItem;
    }
    return { ...state, items: updatedItems };
  }
  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispathCartAction] = useReducer(cartReducer, { items: [] });
  function addItem(item) {
    dispathCartAction({ type: 'ADD_ITEM', item });
  }
  function removeId(id) {
    dispathCartAction({ type: 'REMOVE_ITEM', id });
  }
  const cartContext = {
    items: cart.items,
    addItem,
    removeId,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
