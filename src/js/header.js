import Cart from './services/Cart';
import LoadSpinner from './loader';

const addedList = document.querySelector('.cart-added-list');
 const loader = new LoadSpinner();
export default function updateCartItemCount() {
  const allCartCounts = [...document.getElementsByClassName('cart-item-count')];
loader.show(addedList);
  allCartCounts.map(el => (el.textContent = Cart.getCount()));
  setTimeout(() => {
    loader.hideAndRemove();
  }, 2000);
}
