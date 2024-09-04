import { useContext } from 'react';
import headerImg from '../assets/logo.jpg';
import Button from './UI/Button';
import CartContext from '../store/CartContext';

export default function Header() {
  const cartCtx = useContext(CartContext);
  const totalPrice = cartCtx.items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  return (
    <>
      <header id="main-header">
        <div id="title">
          <img src={headerImg} alt="A restourant" />
          <h1>Food Order</h1>
        </div>
        <nav>
          <Button textOnly>Cart ({totalPrice}) </Button>
        </nav>
      </header>
    </>
  );
}
