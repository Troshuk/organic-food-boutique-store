import Cart from './services/Cart';
import FoodBotiqueApi from './services/FoodBoutiqueApi';
import updateCartItemCount from './header';
import LoadSpinner from './loader';
import { reRenderProductCartIcon } from './product-list';
import { reRenderPopularCartIcon } from './popular-products';
import { reRenderDiscountedCartIcon } from './discounted-products';
import icons from '../img/icons.svg';

const modalBackground = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');
const loader = new LoadSpinner(modal);

export default async function openModalProductDetails(productId) {
  try {
    modalBackground.classList.remove('is-hidden');
    document.body.classList.add('is-modal-open');
    modal.innerHTML = `
      <button type="button" class="modal-close-btn" aria-label="modal close">
        <svg class="modal-icon-close" width="22" height="22">
          <use href="${icons}#icon-x-close"></use>
        </svg>
      </button>
    `;

    loader.show();
    const modalProduct = await FoodBotiqueApi.getProduct(productId);

    modal.insertAdjacentHTML('beforeend', renderModalCard(modalProduct));

    const cartProduct = Cart.getProduct(productId);

    changeModalBtn(!!cartProduct);

    document
      .querySelector('.modal-btn')
      .addEventListener('click', () => updateCart(modalProduct));

    document
      .querySelector('.modal-close-btn')
      .addEventListener('click', closeModalHandler);
    modalBackground.addEventListener('click', clickOnBackdrop);
    document.addEventListener('keydown', escapeModalHandler);

    // Handle cart count update
    const spanQuantity = document.querySelector('.quantity');
    spanQuantity.textContent = cartProduct?.amount ?? 1;

    document
      .querySelector('button[data-action="decrement"]')
      .addEventListener('click', () => {
        const countValue = spanQuantity.textContent - 1;
        spanQuantity.textContent = countValue;

        if (countValue < 1) {
          // If we just decreased the count to 0, that means that we are removing it from the cart
          spanQuantity.textContent = 1;

          if (Cart.getProduct(productId)) {
            updateCart(modalProduct);
          }
        } else {
          Cart.update(modalProduct, countValue);
        }
      });

    document
      .querySelector('button[data-action="increment"]')
      .addEventListener('click', () => {
        const countValue = Number(spanQuantity.textContent) + 1;
        spanQuantity.textContent = countValue;

        if (!Cart.getProduct(productId)) {
          updateCart(modalProduct);
        } else {
          Cart.update(modalProduct, countValue);
        }
      });
  } catch (error) {
    console.error('Error fetching product data:', error.message);
  } finally {
    loader.remove();
  }
}

function renderModalCard({
  img,
  name,
  category,
  size,
  popularity,
  desc,
  price,
}) {
  return `
    <div class="modal-container">
      <div>
        <div class="modal-img">
          <img
            src="${img}"
            alt="${name}"
          />
        </div>
      </div>
      <div class="modal-product-info">
        <h2 class="modal-title">${name}</h2>
        <div class="modal-details">
          <div>
            <span class="modal-subtitle">Category:</span>
            <span class="modal-subtitle-info">
              ${category.replaceAll('_', ' ')}
            </span>
          </div>
          <div>
            <span class="modal-subtitle">Size:</span>
            <span class="modal-subtitle-info">${size}</span>
          </div>
          <div>
            <span class="modal-subtitle">Popularity:</span>
            <span class="modal-subtitle-info">${popularity}</span>
          </div>
        </div>
        <p class="modal-about-product">${desc}</p>
      </div>
    </div>
    <div class="modal-price-container">
      <p class="modal-price-product">
        <span>$</span><span class="modal-price">${price}</span>
      </p>
      <div class="quantity-and-add">
        <div class="quantity-in-modal">
          <button type="button" class="minus-btn" data-action="decrement" aria-label="minus quantity product">
            <svg class="minus-btn-icon">
              <use href="${icons}#icon-minus"></use>
            </svg>
          </button>

          <span class="quantity">1</span>

          <button type="button" class="plus-btn" data-action="increment" aria-label="plus quantity product">
            <svg class="plus-btn-icon">
              <use href="${icons}#icon-plus"></use>
            </svg>
          </button>
        </div>

        <button class="modal-btn" aria-label="add to card">
          <span class="modal-btn-text">Add to</span>
          <svg class="modal-icon-shop" width="18" height="18">
            <use href="${icons}#icon-shopping-cart"></use>
          </svg>
        </button>
      </div>
    </div>`;
}

function updateCart(modalProduct) {
  let isProductAreadyInCart = !!Cart.getProduct(modalProduct._id);

  if (isProductAreadyInCart) {
    Cart.delete(modalProduct._id);
    document.querySelector('.quantity').textContent = 1;
  } else {
    Cart.add(modalProduct);
  }

  changeModalBtn(!isProductAreadyInCart);

  updateCartItemCount();
  reRenderProductCartIcon(modalProduct._id);
  reRenderPopularCartIcon(modalProduct._id);
  reRenderDiscountedCartIcon(modalProduct._id);
}

function changeModalBtn(isProductAreadyInCart) {
  const modalBtnText = document.querySelector('.modal-btn-text');

  if (isProductAreadyInCart) {
    modalBtnText.textContent = 'Remove from';
  } else {
    modalBtnText.textContent = 'Add to';
  }
}

function clickOnBackdrop({ target }) {
  if (target === modalBackground) {
    closeModalHandler();
  }
}

function closeModalHandler() {
  modalBackground.classList.add('is-hidden');
  document.body.classList.remove('is-modal-open');

  document
    .querySelector('.modal-close-btn')
    .removeEventListener('click', closeModalHandler);
  modalBackground.removeEventListener('click', clickOnBackdrop);
  document.removeEventListener('keydown', escapeModalHandler);
  document.querySelector('.modal-btn').removeEventListener('click', updateCart);
}

function escapeModalHandler({ key }) {
  if (key === 'Escape') {
    closeModalHandler();
  }
}
