import { useContext } from 'react';
import headerImg from '../assets/logo.jpg';
import Button from './UI/Button';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const totalItems = cartCtx.items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <>
      <header id="main-header">
        <div id="title">
          <img src={headerImg} alt="A restourant" />
          <h1>Food Order</h1>
        </div>
        <nav>
          <Button onClick={handleShowCart} textOnly>
            Cart ({totalItems}){' '}
          </Button>
        </nav>
      </header>
    </>
  );
}
