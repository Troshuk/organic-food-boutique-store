import Cart from './services/Cart';
import FoodBotiqueApi from './services/FoodBoutiqueApi';
import updateCartItemCount from './header';
import { reRenderProductCartIcon } from './product-list';
import { reRenderPopularCartIcon } from './popular-products';
import { reRenderDiscountedCartIcon } from './discounted-products';

const modalBackground = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');

export default async function openModalProductDetails(productId) {
  try {
    modalBackground.classList.remove('is-hidden');
    modal.innerHTML = '';
    const modalProduct = await FoodBotiqueApi.getProduct(productId);

    modal.innerHTML = renderModalCard(modalProduct);

    changeModalBtn(!!Cart.getProduct(productId));

    document
      .querySelector('.modal-btn')
      .addEventListener('click', () => updateCart(modalProduct));

    document
      .querySelector('.modal-close-btn')
      .addEventListener('click', closeModalHandler);
    modalBackground.addEventListener('click', clickOnBackdrop);
    document.addEventListener('keydown', escapeModalHandler);
  } catch (error) {
    console.error('Error fetching product data:', error.message);
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
    <button type="button" class="modal-close-btn">
      <svg class="modal-icon-close" width="22" height="22">
        <use href="./img/icons.svg#icon-x-close"></use>
      </svg>
    </button>
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
      <ul class="quantity-in-cart">
      <li>
        <button type="button" class="minus-btn">
          <svg class="minus-btn-icon">
            <use href="./img/icons.svg#icon-minus"></use>
          </svg>
        </button>
      </li>
      <li><span class="quantity">1</span></li>
      <li>
        <button type="button" class="plus-btn">
          <svg class="plus-btn-icon">
            <use href="./img/icons.svg#icon-plus"></use>
          </svg>
        </button>
      </li>
    </ul>
    </div>`;
}

function updateCart(modalProduct) {
  let isProductAreadyInCart = !!Cart.getProduct(modalProduct._id);

  if (isProductAreadyInCart) {
    Cart.delete(modalProduct._id);
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
