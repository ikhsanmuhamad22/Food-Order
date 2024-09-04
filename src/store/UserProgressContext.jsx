import { createContext, useState } from 'react';

const UserProgressContext = createContext({
  progress: '',
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function UserProgressProvider({ children }) {
  const [progress, setProgress] = useState('');

  function showCart() {
    setProgress('cart');
  }
  function hideCart() {
    setProgress('');
  }
  function showCheckout() {
    setProgress('chekcout');
  }
  function hideCheckout() {
    setProgress('');
  }

  const userProgressCtx = {
    progress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };

  return (
    <UserProgressContext.Provider value={userProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  );
}

export default UserProgressContext;
