import axios from 'axios';
import FoodBotiqueApi from './services/FoodBoutiqueApi';
import './footer';
import './modal-success';
import updateCartItemCount from './header';
import icons from '../img/icons.svg';

import Cart from './services/Cart';

// Оновлення кількості товарів у кошику при завантаженні сторінки
updateCartItemCount();

const cartContainer = document.querySelector('.cart');
const deleteAllButton = document.querySelector('.cart-delete-button');
const cartItemList = document.querySelector('.cart-basket-list');
const totalPriceElement = document.querySelector('.cart-sum span');

// Додавання слухача подій на кнопку видалення всіх товарів
deleteAllButton.addEventListener('click', () => {
  Cart.clearCart();
  updateCartUI();
});

// Оновлення відображення корзини та кількості товарів у шапці
function updateCartUI() {
  updateCartDisplay();
  updateCartItemCount();
}

// Оновлення відображення кошика після додавання/видалення товарів
function updateCartDisplay() {
  const cartProducts = Cart.getProducts();
  renderCartItems(cartProducts);
  updateTotalPrice(cartProducts);
}

// Отримання товарів з кошика та їх рендеринг
updateCartDisplay();

// Рендеринг товарів в кошику
function renderCartItems(products) {
  // Очищення списку товарів у кошику перед рендерингом
  cartItemList.innerHTML = '';

  // Рендеринг кожного товару в кошику
  products.forEach(product => {
    const listItem = createCartItemElement(product);
    cartItemList.appendChild(listItem);
  });
}

// Створення елементу товару у кошику
function createCartItemElement({ product, productId, amount }) {
  const {
    name = 'Product name',
    category = 'Category',
    size = 'Size',
    price = 0,
    img = '',
  } = product;

  const listItem = document.createElement('li');
  listItem.classList.add('cart-basket-item');

  listItem.innerHTML = `
    <button class="cart-product-delete-button" type="button">
      <svg class="cart-delete-product-icon" width="18" height="18">
        <use href="${icons}#icon-x-close" data-product-id="${productId}"></use>
      </svg>
    </button>
    <div class="image-cart-thumb">
      <img class="cart-image" src="${img}" alt="" width="64" />
    </div>
    <div class="cart-description-thumb">
      <h3 class="cart-product-name">${name}</h3>
      <div class="cart-text-description-container">
        <p class="cart-product-description">
          Category:
          <span class="category cart-description">${category}</span>
        </p>
        <p class="cart-product-description">
          Size:
          <span class="size cart-description">${size}</span>
        </p>
      </div>
      <span class="cart-price">$${price.toFixed(2)}</span>
    </div>
  `;

  // Додавання слухача подій на кнопку видалення товару
  const deleteButton = listItem.querySelector('.cart-product-delete-button');
  deleteButton.addEventListener('click', () => {
    Cart.removeProduct(productId);
    updateCartUI(); // Оновлення корзини та кількості товарів
    reRenderProductCartIcon(productId);
  });

  return listItem;
}

// Функція для обрахунку загальної суми товарів
function updateTotalPrice(products) {
  const total = Cart.getTotal();
  totalPriceElement.innerHTML = `$${total.toFixed(2)}`;
}

function deleteProduct(productId) {
  // Find the <li> element for the product
  const productListItem = document.querySelector(
    `.product-list-item[data-product-id="${productId}"]`
  );

  // Remove the <li> element from the DOM
  productListItem.remove();

  // Call Cart.delete() to remove product from cart
  Cart.delete(productId);

  // Update UI
  updateCartDisplay();
  updateTotalPrice(Cart.getProducts());
}

// const deleteButtons = document.querySelectorAll('.delete-button');

// deleteButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const productId = button.dataset.productId;
//     deleteProduct(productId);
//   });
// });
