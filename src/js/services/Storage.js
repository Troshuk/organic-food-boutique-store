export default class Storage {
  static CART_KEY = 'cart';
  static CATEGORIES_KEY = 'categories';
  static FILTER_KEY = 'filter';
  static POPULAR_PRODUCTS_KEY = 'popular-products';
  static DISCOUNTED_PRODUCTS_KEY = 'discounted-products';

  static get(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  static remove(key) {
    localStorage.removeItem(key);
  }

  static set(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
