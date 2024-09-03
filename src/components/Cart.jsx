import { amoutPrice, mergeCarts } from '../util/function';

export default function Cart({ close, onChangeModal, carts, onChangeCart }) {
  const ShortedCart = mergeCarts(carts);
  const totalPrice = amoutPrice(carts);

  return (
    <>
      <div className="cart">
        <h2>Your Cart</h2>
        <ul>
          {ShortedCart.map((cart) => (
            <li key={cart.id} className="cart-item">
              <p>
                {cart.name} - {cart.price}
              </p>
              <div className="cart-item-actions">
                <button>-</button>
                <p>{cart.count}</p>
                <button>+</button>
              </div>
            </li>
          ))}
        </ul>
        <p className="cart-total">${totalPrice}</p>
        <div className="modal-actions">
          <button className="text-button" onClick={close}>
            Close
          </button>
          <button onClick={() => onChangeModal('checkout')} className="button">
            Go to checkout
          </button>
        </div>
      </div>
    </>
  );
}
