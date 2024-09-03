import { useState } from 'react';
import Header from './components/Header';
import Meals from './components/Meals';

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
      <Meals onAddCart={handleAddMealToCart} />
    </>
  );
}

export default App;
