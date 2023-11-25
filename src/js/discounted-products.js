import Cart from "./services/Cart";

// const product = {
//     _id: '',
// }
// Cart.add(product);

// static async getDiscountedProducts(limit = 2) {
//     let products = Storage.get(Storage.DISCOUNTED_PRODUCTS_KEY);

//     // If products have not been loaded yet, fetch them from the API and store
//     if (!products) {
//       try {
//         products = await FoodBotiqueApi.getDiscountedProducts();
//         Storage.set(Storage.DISCOUNTED_PRODUCTS_KEY, products);
//       } catch (error) {
//         console.error('FoodBotiqueApi.getDiscountedProducts error', error);
//       }
//     }

//     return products.slice(0, limit) ?? [];
//   }


const discountProducts = document.querySelector('.discount-item');
const discountProductsList = document.querySelector(".discount-list");
const discountProductsButton = document.querySelector('.discount-btn');
const cartButton = button.querySelector('.discount-button-icon-cart');
const checkButton = button.querySelector('.discount-button-icon-check');


discountProducts.addEventListener('click', getDiscountedProducts()) {

// static add(product, quantity = 1) {
// Cart.update(product, quantity);
// }

//   Cart.add(DiscountedProducts);

//    const discountProductsEndpoint = 'https://food-boutique.b.goit.study/api/products/discount';

//    export default class DiscountProducts {
//    static async fetch() {
//      try {
//        const response = await axios.get(discountProductsEndpoint);
//        const products = response.data;

//        // Render each product card
//        products.forEach((product) => {
//          const card = DiscountProducts.createProductCard(product);
        
//       // Append the card to the popular products section
//          const discountProductsSection = document.getElementById('discount-products');
//          discountProductsSection.querySelector('.discount-list').appendChild(card);
//        });
//      } catch (error) {
//        console.error('Error fetching popular products:', error);
//      }
//    }

//  static createProductCard(product) {
//          // Create product card elements
//          const card = document.createElement('li');
//          card.className = 'discount-item';

//      card.innerHTML = `
//      <div class="discount-photo-container">
//      <img
//        class="discount-img"
//        src="${product.image}"
//        alt="${product.name}"
//        width="114"
//        height="114"
//     />
//      <svg class="discount-icon" width="32" height="32">
//        <use href="./img/icons.svg#icon-discount"></use>
//      </svg>
//    </div>
//    <div class="discount-info-container">
//    <h3 class="discount-product-name">${product.name}</h3>
//    <p class="discount-product-price">${product.price}</p>
//    <button type="button" class="discount-btn">
//      <svg class="discount-button-icon-cart" width="18" height="18">
//        <use href="./img/icons.svg#icon-shopping-cart"></use>
//      </svg>
//      <svg class="discount-button-icon-check" width="18" height="18">
//        <use href="./img/icons.svg#icon-check"></use>
//      </svg>
//    </button>
//  </div>
//  `;
// discountProductsButton.addEventListener('click', () => addToCart(product.id));
// updateButtonIcon(discountBtn, product.id);

//   // Ініціалізація localStorage для кошика
//          if (!localStorage.getItem('cart')) {
//              localStorage.setItem('cart', JSON.stringify([]));
//          }

// //         // Отримання кошика з localStorage
//          const cart = JSON.parse(localStorage.getItem('cart'));

// //         // Перевірка, чи продукт вже є в кошику
//         const isInCart = cart.some(item => item.id === product.id);

// //         // Визначення видимості кнопок
//          if (isInCart) {
//             cartButton.style.display = 'none';
//              checkButton.style.display = 'block';
//          } else {
//             cartButton.style.display = 'block';
//             checkButton.style.display = 'none';
//         }

// //         // Додавання обробників подій для кнопок
//          cartButton.addEventListener('click', () => addToCart(product));
//          checkButton.addEventListener('click', () => alert('Product is already in the cart!'));

//      return card;
//    }

//  static addToCart(productId) {
//          const product = '640c2dd963a319ea671e3676'/* Fetch detailed product information using productId */;
//          const quantity = 1; 
    
//          // Check if the product is already in the cart
//          const existingProduct = Cart.getProduct(product);
//          if (existingProduct) {
//            cartButton.style.display = 'none';
//            checkButton.style.display = 'block';
//              // Product is already in the cart, update the icon to a check mark
//            // Optionally, you can display a message to the user
//          // or handle it in your preferred way
//            // Update the button icon or display a message
//            alert('Product is already in the cart!');
//          } else {
//     //       // Product is not in the cart, add it
//            Cart.add(product, quantity);
//     //       // Optionally, you can display a success message to the user
//     //       // or handle it in your preferred way
//     //       // Update the button icon or display a success message
//            alert('Product added to the cart!');
//          }
//        }
//      }
    
//      // Fetch discount products when the page loads
//      document.addEventListener('DOMContentLoaded', () => {
//        DiscountProducts.fetch();
//      });

};
