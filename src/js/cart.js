import updateCartItemCount from './header';
import './footer';
import './modal-success';

// Update cart count on initial load of the page
updateCartItemCount();

const spanQuantity = document.querySelector('.quantity');
spanQuantity.textContent = 1;

document
  .querySelector('button[data-action="decrement"]')
  .addEventListener('click', () => {
    const countValue = spanQuantity.textContent - 1;
    spanQuantity.textContent = countValue;

    if (countValue < 1) {
      // If we just decreased the count to 0, that means that we are removing it from the cart
      spanQuantity.textContent = 1;
    }
  });

document
  .querySelector('button[data-action="increment"]')
  .addEventListener('click', () => {
    const countValue = Number(spanQuantity.textContent) + 1;
    spanQuantity.textContent = countValue;
  });
