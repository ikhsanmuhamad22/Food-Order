import { useContext } from 'react';
import Modal from './Ui/Modal';
import CartContext from '../store/CartContext';
import { currencyFormatter } from '../util/formatting';
import Input from './Ui/Input';
import UserProgressContext from '../store/UserProgressContext';
import Button from './UI/Button';
import useHtttp from '../hooks/useHttp';
import Error from './Error';

const requestMethod = {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
};

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const totalPriceCart = cartCtx.items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);
  const {
    data,
    isLoading: sendingData,
    error,
    sendRequest,
    clearData,
  } = useHtttp('http://localhost:3000/orders', requestMethod);

  function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const customerData = Object.fromEntries(fd.entries());
    const body = JSON.stringify({
      order: {
        items: cartCtx.items,
        customer: customerData,
      },
    });
    sendRequest(body);
  }

  function handleCloseCheckout() {
    userProgressCtx.hideCheckout();
  }

  function handleFinishCheckout() {
    userProgressCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  }

  let action = (
    <>
      <Button type="button" onClick={handleCloseCheckout} textOnly>
        Close
      </Button>
      <Button type="submit" className="button">
        Submit Order
      </Button>
    </>
  );

  if (sendingData) {
    action = <p>sending data....</p>;
  }

  if (data) {
    return (
      <Modal
        open={userProgressCtx.progress === 'checkout'}
        onClose={handleFinishCheckout}
      >
        <h2>Success !!</h2>
        <p>your order on prosses, thanks</p>
        <div className="modal-actions">
          <Button onClick={handleFinishCheckout}>Okeyy</Button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal
      open={userProgressCtx.progress === 'checkout'}
      onClose={handleCloseCheckout}
    >
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
        {error && (
          <Error
            title="failed to send data"
            message={error || 'something went wrong'}
          />
        )}
        <p className="modal-actions">{action}</p>
      </form>
    </Modal>
  );
}
