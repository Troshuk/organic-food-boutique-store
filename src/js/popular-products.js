import Cart from './services/Cart';
import Filter from './services/Filter';
import updateCartItemCount from './header';
import openModalProductDetails from './modal';
import LoadSpinner from './loader';

const loader = new LoadSpinner();


const popularProductContainer = document.querySelector(
  '.popular-products-container'
);

loader.show(popularProductContainer);

Filter.getPopularProducts().then(products => {
  const productElements = products.map(createProductItem);
  const listElement = document.createElement('ul');
  listElement.className = 'popular-products-list';

  productElements.map(cartElement => {
    const productId = cartElement.dataset.productId;
    const isProductInCart = !!Cart.getProduct(productId);

    cartElement.querySelector('.basket-button').style.display = isProductInCart
      ? 'none'
      : 'block';
    cartElement.querySelector('.basket-button-icon-check').style.display =
      isProductInCart ? 'block' : 'none';

    listElement.appendChild(cartElement);
    
  });

  popularProductContainer.appendChild(listElement);

  listElement.addEventListener('click', ({ target }) => {
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
        Cart.add(products.find(e => e._id === productId));
      }

      updateCartItemCount();

      cartElement.querySelector('.basket-button').style.display =
        isProductInCart ? 'block' : 'none';
      cartElement.querySelector('.basket-button-icon-check').style.display =
        isProductInCart ? 'none' : 'block';
      
    }
      loader.hide();
  });
});



  function reRenderCartIcon(productId) {
    const productCard = document.querySelector(
      `.popular-products-item[data-product-id="${productId}"]`
    );
    const isProductInCart = !!Cart.getProduct(productId);

    productCard.querySelector('.basket-button').style.display = isProductInCart
      ? 'none'
      : 'block';
    productCard.querySelector('.basket-button-icon-check').style.display =
      isProductInCart ? 'block' : 'none';
  }

  function createProductItem({
    _id,
    img,
    name,
    is10PercentOff,
    category,
    size,
    popularity,
  }) {
    const productItem = document.createElement('li');
    productItem.className = 'popular-products-item';
    productItem.dataset.productId = _id;

    productItem.innerHTML = `
    <div class="popular-products-img-container">
      <img class="popular-products-img" src="${img}" alt="${name}" width="56" height="56"/>
      <svg class="popular-products-discount-icon" width="20" height="20"
      style="${is10PercentOff ? '' : 'display:none'}">
        <use href="./img/icons.svg#icon-discount"></use>
      </svg>
    </div>

    <div class="popular-products-description-thumb">
      <h3 class="popular-products-name">${name}</h3>
      <button class="basket-button" type="button">
        <svg class="popular-products-cart-icon" width="12" height="12">
          <use href="./img/icons.svg#icon-shopping-cart"></use>
        </svg>
      </button>
      <button class="basket-button-icon-check">
        <svg class="popular-products-icon-check" width="12" height="12">
          <use href="./img/icons.svg#icon-check"></use>
        </svg>
      </button> 

      <div class="popular-products-description-container">
        <p class="popular-products-description">
          Category:
          <span class="popular-description">
            ${category.replaceAll('_', ' ')}
          </span>
        </p>

        <p class="popular-products-description">
          Size:
          <span class="popular-description">${size}</span>
        </p>

        <p class="popular-products-description">
          Popularity:
          <span class="popular-description">${popularity}</span>
        </p>
      </div>
    </div>
  `;

    return productItem;
  }
