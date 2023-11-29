import updateCartItemCount from './header';
import './footer';
import './modal-success';

// Update cart count on initial load of the page
updateCartItemCount();

let countValue = 1;

const spanQuantity = document.querySelector('.quantity');

const DecrBtn = document.querySelector('button[data-action="decrement"]');

DecrBtn.addEventListener('click', () => {
  countValue -= 1;
  spanQuantity.textContent = countValue;
});

const IncrBtn = document.querySelector('button[data-action="increment"]');

IncrBtn.addEventListener('click', () => {
  countValue += 1;
  spanQuantity.textContent = countValue;
});
