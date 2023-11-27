import FoodBotiqueApi from './services/FoodBoutiqueApi';
import Filter from './services/Filter';
import Cart from './services/Cart';
import updateCartItemCount from './header';
import openModalProductDetails from './modal';
const listAllProducts = document.querySelector('.product-list-product__list');
const sectionAllProducts = document.querySelector('.all-products');
const markupTextBox = `<div class="product-list__text__box">
    <p class="product-list__text__one">
      Nothing was found for the selected
      <span class="text__one__span">filters...</span>
    </p>
    <p class="product-list__text__two">
      Try adjusting your search parameters or browse our range by other criteria
      to find the perfect product for you.
    </p>
  </div>`;
function checkingBasket() {
  const listCard = document.querySelectorAll('.product-list-product__card');
  [...listCard].map(cartElement => {
    const productId = cartElement.dataset.productId;
    const isProductInCart = !!Cart.getProduct(productId);
    console.log(cartElement);

    cartElement.querySelector('.product-list-icon__btn').style.display =
      isProductInCart ? 'none' : 'block';
    cartElement.querySelector('.product-list-icon__btn-added').style.display =
      isProductInCart ? 'block' : 'none';
  });
}
function changeBtn(results) {
  listAllProducts.addEventListener('click', ({ target }) => {
    const cartElement = target.closest('LI');
    const cartButton = target.closest('BUTTON');

    if (cartElement?.nodeName !== 'LI') {
      return;
    }

    const productId = cartElement.dataset.productId;

    if (cartButton?.nodeName !== 'BUTTON') {
      openModalProductDetails(productId, reRenderCartIcon);
      return;
    }

    if (cartButton?.nodeName === 'BUTTON') {
      const isProductInCart = !!Cart.getProduct(productId);

      if (isProductInCart) {
        Cart.delete(productId);
      } else {
        Cart.add(results.find(e => e._id === productId));
      }

      updateCartItemCount();
      const addBtn = cartButton.querySelector('.product-list-icon__btn');
      const checkBtn = cartButton.querySelector(
        '.product-list-icon__btn-added'
      );

      addBtn.style.display = isProductInCart ? 'block' : 'none';
      checkBtn.style.display = isProductInCart ? 'none' : 'block';
    }
  });
}

function reRenderCartIcon(isProductInCart) {}

function renderProductCards(arr) {
  const markup = arr
    .map(
      ({
        _id,
        name,
        img,
        category,
        price,
        size,
        popularity,
      }) => `<li class="product-list-product__card" data-product-id=${_id}>
      <svg class="product-list-icon-discount" width="60" height="60">
        <use href="./img/icons.svg#icon-discount"></use>
      </svg>
      <div class="product-list-box__img">
        <img
          class="product-list-card__image"
          src="${img}"
          alt="${name}"
          width="140"
          height="140"
        />
      </div>
      <div class="product-list-info__box">
        <h3 class="product-list-name__product">${name}</h3>
        <div class="product-list-info">
          <p class="product-list-info__item">
            <span class="product-list-span__text">Category:</span>
            <span>${category}</span>
          </p>

          <p class="product-list-info__item">
            <span class="product-list-span__text">Size:</span>
            <span>${size}</span>
          </p>
          <p class="product-list-info__item">
            <span class="product-list-span__text">Popularity:</span>
            <span>${popularity}</span>
          </p>
        </div>
      </div>
      <div class="product-list-price__btn">
        <p class="product-list-price__product">${price}</p>
        <button type="button" class="product-list-button__card">
          <svg class="product-list-icon__btn" width="18" height="18">
            <use href="./img/icons.svg#icon-shopping-cart"></use>
          </svg>
          <svg class="product-list-icon__btn-added" width="18" height="18">
            <use href="./img/icons.svg#icon-check"></use>
          </svg>
         </button>
      </div>
    </li>`
    )
    .join('');
  listAllProducts.innerHTML = markup;
}

async function fetchProducts() {
  try {
    const { results } = await FoodBotiqueApi.getProducts(Filter.get());
    if (results.length >= 1) {
      renderProductCards(results);
      checkingBasket();
      changeBtn(results);
    } else {
      listAllProducts.classList.add('is-hidden');
      sectionAllProducts.innerHTML = markupTextBox;
    }
  } catch (error) {
    console.error(error);
  }
}
fetchProducts();
