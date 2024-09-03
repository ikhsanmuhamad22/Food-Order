import { useState } from 'react';
import headerImg from '../assets/logo.jpg';
import Modal from './Modal';
import Cart from './Cart';
import Checkout from './Checkout';

export default function Header({ cart, onChangeCart }) {
  const [activeModal, setActiveModal] = useState('');

  function handleChangeModal(modal) {
    setActiveModal(modal);
  }

  function handleCloseModal() {
    setActiveModal('');
  }

  return (
    <>
      {/* {activeModal === 'checkout' && (
        <Modal open={activeModal}>
          <Checkout onChangeModal={handleChangeModal} carts={cart} />
        </Modal>
      )}
      {activeModal === 'cart' && (
        <Modal open={activeModal}>
          <Cart
            close={handleCloseModal}
            onChangeModal={handleChangeModal}
            carts={cart}
            onChangeCart={onChangeCart}
          />
        </Modal>
      )} */}
      <header id="main-header">
        <div id="title">
          <img src={headerImg} alt="A restourant" />
          <h1>Food Order</h1>
        </div>
        <nav>
          <button
            onClick={() => handleChangeModal('cart')}
            className="text-button"
          >
            Cart ({cart.length})
          </button>
        </nav>
      </header>
    </>
  );
}
