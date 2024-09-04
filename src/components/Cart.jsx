import { useContext } from 'react';
import Modal from './Ui/Modal';
import CartContext from '../store/CartContext';
import { currencyFormatter } from '../util/formatting';
import UserProgressContext from '../store/UserProgressContext';
import Button from './UI/Button';

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalPriceCart = cartCtx.items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  function handleHideCart() {
    userProgressCtx.hideCart();
  }

  return (
    <Modal className="cart" open={userProgressCtx.progress === 'cart'}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((cart) => (
          <li key={cart.id} className="cart-item">
            <p>
              {cart.name} - {cart.quantity}
            </p>
          </li>
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(totalPriceCart)}</p>
      <div className="modal-actions">
        <Button textOnly onClick={handleHideCart}>
          Close
        </Button>
        <Button className="button">Go to checkout</Button>
      </div>
    </Modal>
  );
}
