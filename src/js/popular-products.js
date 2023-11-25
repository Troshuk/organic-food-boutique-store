import Cart from "./services/Cart";


// const product = {
//     _id: '',
// }
// Cart.add(product);


//   static async getPopularProducts(limit = 5) {
//     const response = await api.get(POPULAR_PRODUCTS_ENDPOINT, {
//       params: { limit },
//     });

//     return response.data;
//   }
const popularProductsList = document.querySelector('.popular-products-list');
const popularProduct = document.querySelector('.popular-products-item');
const popularProductBtn = document.querySelector('.basket-button');


// popularProduct.getProduct(id);
// popularProduct.addEventListener('click', (getPopularProducts)); 
// popularProductBtn.addEventListener('click', (e));



// const galleryList = document.querySelector(".gallery");

function createPopularProductList() {
  return popularProduct
      .map(({
          _id,
name,
img,
category,
// price,
size,
// is10PercentOff,
popularity }) => {
      return `<li class="popular-products-item">
  <div class="popular-products-img-container">
        <img
          class="${product.img}"
          src="https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3676.png"
          alt=""
          width="56"
          height="56"
        />
        <svg class="popular-products-discount-icon" width="20" height="20">
          <use href="./img/icons.svg#icon-discount"></use>
        </svg>
      </div>

      <div class="popular-products-description-thumb">
        <h3 class="popular-products-name${product.name}">Askee</h3>

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
            <span class="${product.category} popular-description">Fresh Produce</span>
          </p>

          <p class="popular-products-description">
            Size:
            <span class="${product.size} popular-description">16 oz</span>
          </p>

          <p class="popular-products-description">
            Popularity:
            <span class="${product.popularity} popular-description">3</span>
          </p>
        </div>
      </div>
</li>`;
    })
    .join("");
}

popularProductsList.insertAdjacentHTML("beforeend", createPopularProductList());



// popularProductBusketButton.addEventListener('click', (e)) = {
//     if (e.popularProductBusketButton.onclick) {
//         popular-products-cart-icon = popular-products-icon-check
//    }
// }

//  static add(product, quantity = 1) {
//     Cart.update(product, quantity);
//   }

// Cart.add(popularProduct);

// const popularProductsEndpoint = 'https://food-boutique.b.goit.study/api/v1/popular-products';

// export default class PopularProducts {
//   static async fetch() {
//     try {
//       const response = await axios.get(popularProductsEndpoint);
//       const products = response.data;

//       // Render each product card
//       products.forEach((product) => {
//         const card = PopularProducts.createProductCard(product);
//         // Append the card to the popular products section
//         const popularProductsSection = document.getElementById('popular-products');
//         popularProductsSection.querySelector('.popular-products-list').appendChild(card);
//       });
//     } catch (error) {
//       console.error('Error fetching popular products:', error);
//     }
//   }

//   static createProductCard(product) {
//     // Create product card elements
//     const card = document.createElement('li');
//     card.className = 'popular-products-item';

//     card.innerHTML = `
//       <div class="popular-products-img-container">
//         <img class="popular-products-img" src="${product.image}" alt="${product.name}" width="56" height="56"/>
//         <svg class="popular-products-discount-icon" width="20" height="20">
//           <use href="./img/icons.svg#icon-discount"></use>
//         </svg>
//       </div>

//       <div class="popular-products-description-thumb">
//         <h3 class="popular-products-name">${product.name}</h3>

//         <button class="basket-button" type="button" onclick="PopularProducts.addToCart('${product.id}')">
//           <svg class="popular-products-cart-icon" width="12" height="12">
//             <use href="./img/icons.svg#icon-shopping-cart"></use>
//           </svg>
//         </button>
        
//         <div class="popular-products-description-container">
//           <p class="popular-products-description">
//             Category:
//             <span class="category popular-description">${product.category}</span>
//           </p>

//           <p class="popular-products-description">
//             Size:
//             <span class="size popular-description">${product.size}</span>
//           </p>

//           <p class="popular-products-description">
//             Popularity:
//             <span class="popularity popular-description">${product.popularity}</span>
//           </p>
//         </div>
//       </div>
//     `;

//     return card;
//   }

//   static addToCart(productId) {
//     const product = '640c2dd963a319ea671e3676'/* Fetch detailed product information using productId */;
//     const quantity = 1; // You can change this as needed

//     // Check if the product is already in the cart
//     const existingProduct = Cart.getProduct(product);
//     if (existingProduct) {
//       // Product is already in the cart, update the icon to a check mark
//       // Optionally, you can display a message to the user
//       // or handle it in your preferred way
//       // Update the button icon or display a message
//       alert('Product is already in the cart!');
//     } else {
//       // Product is not in the cart, add it
//       Cart.add(product, quantity);
//       // Optionally, you can display a success message to the user
//       // or handle it in your preferred way
//       // Update the button icon or display a success message
//       alert('Product added to the cart!');
//     }
//   }
// }

// // Fetch popular products when the page loads
// document.addEventListener('DOMContentLoaded', () => {
//   PopularProducts.fetch();
// });