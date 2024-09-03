import { useState } from 'react';
import AvailableMeals from './components/AvailableMeals';
import Header from './components/Header';

function App() {
  const [cart, setCart] = useState([]);

  function handleAddMealToCart(meal) {
    setCart((prev) => {
      return [...prev, meal];
    });
  }

  function handleChangeCart(meal) {
    setCart(meal);
  }

  return (
    <>
      <Header cart={cart} onChangeCart={handleChangeCart} />
      <AvailableMeals onAddCart={handleAddMealToCart} />
    </>
  );
}

export default App;
