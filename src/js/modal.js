import FoodBotiqueApi from "./services/foodBoutiqueApi";
import Storage from "./services/storage";

const closeModalButton = document.querySelector('.modal-close-btn');
const modalBackground = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-img');
const modalTitle = document.querySelector('.modal-title');
const modalCategory = document.getElementById('category');
const modalSize = document.getElementById('size');
const modalPopularity = document.getElementById('popularity');
const modalDetailsText = document.querySelector('.modal-details')
const modalAboutProduct = document.querySelector('.modal-about-product');
const modalPriceProduct = document.querySelector('.modal-price-product');
const modalAddButton = document.querySelector('.modal-btn')


modalAddButton.addEventListener('click', changeModalBtn);
closeModalButton.addEventListener('click', closeModalHandler);
modalBackground.addEventListener('click', closeModalHandler);
document.addEventListener('keydown', escapeModalHandler);


const productById = '640c2dd963a319ea671e383b';


async function showProductDetails(productId) {
  try {
    const modalProduct = await FoodBotiqueApi.getProduct(productId);
    console.log('Product:', modalProduct)
    modalImg.innerHTML= `<img src="${modalProduct.img}" alt="photo of product" />`;
    modalTitle.textContent = modalProduct.name;
    modalCategory.textContent = modalProduct.category;
    modalSize.textContent = modalProduct.size;
    modalPopularity.textContent = modalProduct.popularity;
    modalAboutProduct.textContent = modalProduct.desc;

    return modalProduct.data;

  }catch (error) {
    console.error('Error fetching product data:', error.message);
  }
}

showProductDetails(productById);

let modalProductInCart;

modalAddButton.addEventListener('click', async () => {
  try {
  const cart = Storage.get(Storage.CART_KEY) || [];
  modalProductInCart = cart.some(item => item.productId === productById);
    if (modalProductInCart) {
      const updatedCart = cart.filter(item => item.productId !== productById);
      console.log('Product removed from cart:', modalProductInCart);
      Storage.set(Storage.CART_KEY, updatedCart);
      } else {
     
        const updatedCart = [...cart, { productId: productById, amount: 1 }];
        console.log('Product added to cart:', modalProductInCart);
        Storage.set(Storage.CART_KEY, updatedCart);
    }  
     changeModalBtn(modalProductInCart);
}
  catch (error) {
    console.error('Error adding product to cart:', error.message);
  }
})
 

 function changeModalBtn(value) {
  const dataAction = value ? 'toRemove' : 'toAdd';
  const buttonText = value ? 'Remove from' : 'Add to';
  
  const buttonMarkUp = `
    <button class="modal-btn" data-action="${dataAction}">
      ${buttonText}
      <svg class="modal-icon-shop" width="18" height="18">
        <use href="./img/icons.svg#icon-shopping-cart"></use>
      </svg>
    </button>`;
   
   modalAddButton.innerHTML = buttonMarkUp;
}
  





  
  function cleanModalEventListeners() {
    closeModalButton.removeEventListener('click', closeModalHandler);
    modalBackground.removeEventListener('click', closeModalHandler);
    document.removeEventListener('keydown', escapeModalHandler);
};

  modal.onclick = function (event) {
    event.stopPropagation();
  };

  function closeModalHandler() {
    modalBackground.classList.add('is-hidden');
    cleanModalEventListeners();
}
  
 function escapeModalHandler(event) {
    if (event.key == 'Escape') {
      closeModalHandler();
   }
}


