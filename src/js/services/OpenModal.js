import FoodBotiqueApi from "./FoodBoutiqueApi";



export default async function openModalProductDetails({
productId: productId,
  modal: modal,
  modalBackground: modalBackground,
  modalImg: modalImg,
  modalTitle: modalTitle,
  modalCategory: modalCategory,
  modalSize: modalSize,
  modalPopularity: modalPopularity,
  modalAboutProduct: modalAboutProduct,
  modalPriceProduct: modalPriceProduct
}) {

 
  try {
    const modalProduct = await FoodBotiqueApi.getProduct(productId);
    console.log('Product:', modalProduct)
    modalImg.innerHTML= `<img src="${modalProduct.img}" alt="photo of product" />`;
    modalTitle.textContent = modalProduct.name;
    modalCategory.textContent = modalProduct.category;
    modalSize.textContent = modalProduct.size;
    modalPopularity.textContent = modalProduct.popularity;
    modalAboutProduct.textContent = modalProduct.desc;
    modalPriceProduct.textContent = modalProduct.price;

  modal.classList.remove('is-hidden');
  modalBackground.classList.remove('is-hidden');

  }catch (error) {
    console.error('Error fetching product data:', error.message);
  }
}