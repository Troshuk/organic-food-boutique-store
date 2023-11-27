import FoodBotiqueApi from './services/FoodBoutiqueApi';
import Filter from './services/Filter';
import Cart from './services/Cart';
const listAllProducts = document.querySelector('.product-list-product__list');
const sectionAllProducts = document.querySelector('.all-products');
const modal = document.querySelector('.modal-background');
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
let productCard;
function changeBtn() {
  productCard = document.querySelectorAll('.product-list-product__card');
  const addedButtons = document.querySelectorAll('.product-list-button__card');

  addedButtons.forEach(async addedButton => {
    const button = addedButton;
    const productCard = button.closest('.product-list-product__card');
    const productId = productCard.id;
    const product = await FoodBotiqueApi.getProduct(productId);

    const isInCart = Cart.getProduct(product);

    if (isInCart) {
      button.style.display = 'none';
      const addedButton = productCard.querySelector(
        '.product-list-button__card-added'
      );
      addedButton.style.display = 'block';
    }
    addedButton.addEventListener('click', async event => {
      const button = event.currentTarget;
      const productCard = button.closest('.product-list-product__card');
      const productId = productCard.id;
      const product = await FoodBotiqueApi.getProduct(productId);

      if (product) {
        const isInCart = await Cart.getProduct(product);

        if (isInCart) {
          Cart.update(product, isInCart.amount + 1);
        } else {
          Cart.add(product);
          button.style.display = 'none';
          const addedButton = productCard.querySelector(
            '.product-list-button__card-added'
          );
          addedButton.style.display = 'block';
        }
      }
    });
  });
}

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
      }) => `<li class="product-list-product__card" id=${_id}>
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
        </button>
        <button type="button" class="product-list-button__card-added">
          <svg class="product-list-icon__btn-added" width="18" height="18">
            <use href="./img/icons.svg#icon-check"></use>
          </svg>
        </button>
      </div>
    </li>`
    )
    .join('');
  listAllProducts.innerHTML = markup;
  changeBtn();
}

// function fetchProducts() {
//   const filters = Filter.get();
//   FoodBotiqueApi.getProducts(filters)
//     .then(({ results }) => {
//       renderProductCards(results);
//       const allProductsCard = document.querySelectorAll(
//         '.product-list-product__card'
//       );
//       allProductsCard.forEach(productCard => {
//         productCard.addEventListener('click', () => {
//           const productId = productCard.id;
//           console.log(productId);
//           openModalDetails(productId);
//         });
//       });
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }

// function openModalDetails(productId) {
//   FoodBotiqueApi.getProduct(productId)
//     .then(productDetails => {
//       console.log(productDetails);
//       displayDetailsInModal(productDetails);
//     })
//     .catch(error => {
//       console.error(`${productId}`, error);
//     });
// }

// function displayDetailsInModal(productDetails) {
//   const markup = `<div class="modal">
//     <button type="button" class="modal-close-btn">
//       <svg class="modal-icon-close" width="22" height="22">
//         <use href="./img/icons.svg#icon-x-close"></use>
//       </svg>
//     </button>
//     <div class="modal-container">
//       <div>
//         <div class="modal-img">
//           <img
//             src="${productDetails.img}"
//             alt="${productDetails.name}"
//           />
//         </div>
//       </div>
//       <div class="modal-product-info">
//         <h2 class="modal-title">${productDetails.name}</h2>
//         <div class="modal-details">
//           <div>
//             <span class="modal-subtitle">Category:</span>
//             <span class="modal-subtitle-info">${productDetails.category}</span>
//           </div>
//           <div>
//             <span class="modal-subtitle">Size:</span>
//             <span class="modal-subtitle-info">${productDetails.size}</span>
//           </div>
//           <div>
//             <span class="modal-subtitle">Popularity:</span>
//             <span class="modal-subtitle-info">${productDetails.popularity}</span>
//           </div>
//         </div>
//         <p class="modal-about-product">${productDetails.desc}
//         </p>
//       </div>
//     </div>
//     <div class="modal-price-container">
//       <p class="modal-price-product">${productDetails.price}</p>
//       <button class="modal-btn">
//         Add to<svg class="modal-icon-shop" width="18" height="18">
//           <use href="./img/icons.svg#icon-shopping-cart"></use>
//         </svg>
//       </button>
//     </div>
//   </div>`;
//   modal.innerHTML = markup;
//   modal.classList.remove('is-hidden');
//   const closeModalButton = document.querySelector('.modal-close-btn');
//   closeModalButton.addEventListener('click', function () {
//     modal.classList.add('is-hidden');
//   });
// }

// async function fetchProducts() {
//   try {
//     const { results } = await FoodBotiqueApi.getProducts(Filter.get());
//     renderProductCards(results);
//     console.log(results);
//   } catch (error) {
//     console.error(error);
//   }
// }
// fetchProducts();
async function fetchProducts() {
  try {
    const { results } = await FoodBotiqueApi.getProducts(Filter.get());
    if (results.length >= 1) {
      renderProductCards(results);
    } else {
      listAllProducts.classList.add('is-hidden');
      sectionAllProducts.innerHTML = markupTextBox;
    }
  } catch (error) {
    console.error(error);
  }
}
fetchProducts();
