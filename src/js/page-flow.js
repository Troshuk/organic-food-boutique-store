import LoadSpinner from './loader';
import FoodBotiqueApi from './services/FoodBoutiqueApi';



const loaderElement = document.querySelector('.loader');
const loadSpinner = new LoadSpinner({ loader: loaderElement });


const productId = '640c2dd963a319ea671e383b';
loadSpinner.fetchData(async () => {
    try {
 const [categories, product, discount, popular] = await Promise.all([
    FoodBotiqueApi.getCategories(),
    FoodBotiqueApi.getProduct(productId),
    FoodBotiqueApi.getDiscountedProducts(),
    FoodBotiqueApi.getPopularProducts()
    ]);

    // Тут можна використовувати отримані дані
    console.log('Отримані категорії:', categories);
    console.log('Отриманий продукт:', product);
        console.log('Отриманий продукт:', discount);
        console.log('Отриманий продукт:', popular);
  } catch (error) {
    console.error('Помилка отримання даних:', error);
  }
});




