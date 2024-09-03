import { createOrders } from '../http';
import { amoutPrice } from '../util/function';

export default function Checkout({ onChangeModal, carts }) {
  const total = amoutPrice(carts);

  async function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const customerData = Object.fromEntries(fd.entries());

    const order = {
      items: carts,
      customer: customerData,
    };

    try {
      await createOrders({ order });
      console.log('Order successfully created');
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  return (
    <div>
      <h2>Checkout</h2>
      <p>Total amout ${total}</p>
      <form onSubmit={handleSubmit}>
        <div className="control">
          <label htmlFor="name">Full Name</label>
          <input id="name" name="name" type="text" />
        </div>
        <div className="control">
          <label htmlFor="email">Email Address</label>
          <input id="email" name="email" type="text" />
        </div>
        <div className="control">
          <label htmlFor="street">Street</label>
          <input id="street" name="street" type="text" />
        </div>
        <div className="control-row">
          <div className="control">
            <label htmlFor="postal-code">Postal Code</label>
            <input id="postal-code" name="postal-code" type="text" />
          </div>
          <div className="control">
            <label htmlFor="city">City</label>
            <input id="city" name="city" type="text" />
          </div>
        </div>
        <div className="modal-actions">
          <button className="text-button" onClick={() => onChangeModal('cart')}>
            Close
          </button>
          <button type="submit" className="button">
            Submit Order
          </button>
        </div>
      </form>
    </div>
  );
}
