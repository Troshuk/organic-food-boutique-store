import Cart from './services/Cart';
// import FoodBotiqueApi from './FoodBoutiqueApi';
import Filter from './services/Filter';
// import updateCartItemCount from './header';
// import openModalProductDetails from './modal';

const popularProductContainer = document.querySelector(
  '.popular-products-container'
);
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

    //   Or Icon change!

    // cartElement.querySelector('.popular-products-cart-icon').style.display =
    //   isProductInCart ? 'none' : 'block';
    // cartElement.querySelector('.popular-products-icon-check').style.display =
    //     isProductInCart ? 'block' : 'none';

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
  });
});

function createProductItem({ _id, img, name, category, size, popularity }) {
  const productItem = document.createElement('li');
  productItem.className = 'popular-products-item';
  productItem.dataset.productId = _id;

  productItem.innerHTML = `
    <div class="popular-products-img-container">
      <img class="popular-products-img" src="${img}" alt="${name}" width="56" height="56"/>
      <svg class="popular-products-discount-icon" width="20" height="20">
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
          <span class="category popular-description">${category}</span>
        </p>

        <p class="popular-products-description">
          Size:
          <span class="size popular-description">${size}</span>
        </p>

        <p class="popular-products-description">
          Popularity:
          <span class="popularity popular-description">${popularity}</span>
        </p>
      </div>
    </div>
  `;

  return productItem;
}

//---------------------------------------------------------------

//     document.addEventListener('DOMContentLoaded', async () => {
//   try {
//     const popularProducts = await FoodBotiqueApi.getPopularProducts();

//     const popularProductsList = document.querySelector('.popular-products-list');

//     popularProducts.forEach((product) => {
//       const productItem = createProductItem(product);
//       popularProductsList.appendChild(productItem);
//     });

//       const addToCartButtons = document.querySelectorAll('.basket-button');
//     addToCartButtons.forEach((button) => {
//       button.addEventListener('click', (event) => {
//         const productId = event.currentTarget.dataset.productId;
//         addToCart(productId);

//         // Змінюємо клас кнопки на 'basket-button-icon-check'
//   // button.classList.remove('basket-button');
//         // button.classList.add('basket-button-icon-check');
//         //   або змінюємо іконку та стиль кнопки
//           svg.classList.remove('popular-products-cart-icon');
//          svg.classList.add('popular-products-icon-check')

//       });
//     });
//       const productItems = document.querySelectorAll('.popular-products-item');
//     productItems.forEach((item) => {
//       item.addEventListener('click', (event) => {
//         // Викликаємо функцію, яка відобразить модальне вікно
//         //   тестовий варіант!! до стягнення оновлення

//           const productId = cartElement.dataset.productId;

//     if (cartButton?.nodeName !== 'BUTTON') {
//       openModalProductDetails(productId, reRenderCartIcon);
//       return;
//     }
//       });
//     });

//   } catch (error) {
//     console.error('Error fetching popular products:', error);
//   }
//     });

// //     function displayModal(productItem) {

// //
// //     }

// function createProductItem(product) {
//   const productItem = document.createElement('li');
//   productItem.className = 'popular-products-item';

//   productItem.innerHTML = `
//     <div class="popular-products-img-container">
//       <img class="popular-products-img" src="${product.img}" alt="${product.name}" width="56" height="56"/>
//       <svg class="popular-products-discount-icon" width="20" height="20">
//         <use href="./img/icons.svg#icon-discount"></use>
//       </svg>
//     </div>

//     <div class="popular-products-description-thumb">
//       <h3 class="popular-products-name">${product.name}</h3>

//       <button class="basket-button" type="button" onclick="addToCart('${product.id}')">
//         <svg class="popular-products-cart-icon" width="12" height="12">
//           <use href="./img/icons.svg#icon-shopping-cart"></use>
//         </svg>
//       </button>
//         <button class="basket-button-icon-check">
//           <svg class="popular-products-icon-check" width="12" height="12">
//             <use href="./img/icons.svg#icon-check"></use>
//           </svg>
//         </button>

//

//       <div class="popular-products-description-container">
//         <p class="popular-products-description">
//           Category:
//           <span class="category popular-description">${product.category}</span>
//         </p>

//         <p class="popular-products-description">
//           Size:
//           <span class="size popular-description">${product.size}</span>
//         </p>

//         <p class="popular-products-description">
//           Popularity:
//           <span class="popularity popular-description">${product.popularity}</span>
//         </p>
//       </div>
//     </div>
//   `;

//   return productItem;
// }

//  async function addToCart(productId) {

//      const product =  await FoodBotiqueApi.getProduct(productId);
//     Cart.add(product);
// }

// ----------------------------------------------------------------
