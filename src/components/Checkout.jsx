import { useContext } from 'react';
import Modal from './Ui/Modal';
import CartContext from '../store/CartContext';
import { currencyFormatter } from '../util/formatting';
import Input from './Ui/Input';
import UserProgressContext from '../store/UserProgressContext';
import Button from './UI/Button';

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const totalPriceCart = cartCtx.items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);
  function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const customerData = Object.fromEntries(fd.entries());

    console.log(customerData);
  }

  return (
    <Modal open={userProgressCtx.progress === 'checkout'}>
      <h2>Checkout</h2>
      <p>Total amout {currencyFormatter.format(totalPriceCart)}</p>
      <form onSubmit={handleSubmit}>
        <Input className="control" label="Full-name" id="name" type="text" />
        <Input
          className="control"
          label="Email address"
          id="email"
          type="email"
        />
        <Input className="control" label="Street" id="street" type="text" />
        <div className="control-row">
          <Input
            className="control"
            label="Postal-code"
            id="postal-code"
            type="text"
          />
          <Input className="control" label="City" id="city" type="text" />
        </div>
        <div className="modal-actions">
          <Button
            type="button"
            onClick={() => userProgressCtx.hideCheckout()}
            textOnly
          >
            Close
          </Button>
          <Button type="submit" className="button">
            Submit Order
          </Button>
        </div>
      </form>
    </Modal>
  );
}
