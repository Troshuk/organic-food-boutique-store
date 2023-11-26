import Cart from './services/Cart';

export default function updateCartItemCount() {
  const allCartCounts = [...document.getElementsByClassName('cart-item-count')];

  allCartCounts.map(el => (el.textContent = Cart.getCount()));
}
