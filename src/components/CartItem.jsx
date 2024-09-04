export default function CartItem({ cart, increase, decrease }) {
  return (
    <li className="cart-item">
      <p>
        {cart.name} - {cart.quantity} x {cart.price}
      </p>
      <p className="cart-item-actions">
        <button onClick={decrease}>-</button>
        {cart.quantity}
        <button onClick={increase}>+</button>
      </p>
    </li>
  );
}
