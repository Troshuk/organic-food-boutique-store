import axios from 'axios';

const BASE_URL = 'https://food-boutique.b.goit.study/api/';
const CATEGORIES_ENDPOINT = 'products/categories';
const PRODUCTS_ENDPOINT = 'products';
const PRODUCT_ENDPOINT = 'products/';
const POPULAR_PRODUCTS_ENDPOINT = 'products/popular';
const DISCOUNTED_PRODUCTS_ENDPOINT = 'products/discount';
const SUBSCRIBE_ENDPOINT = 'subscription';
const ORDERS_ENDPOINT = 'orders';

const api = axios.create({ baseURL: BASE_URL });

export default class FoodBotiqueApi {
  static async getCategories() {
    const response = await api.get(CATEGORIES_ENDPOINT);

    return response.data;
  }

  static async getProducts({ keyword, category, page, limit, sortBy } = {}) {
    const response = await api.get(PRODUCTS_ENDPOINT, {
      params: {
        keyword,
        category,
        page,
        limit,
        [sortBy?.key]: sortBy?.value,
      },
    });

    return response.data;
  }

  static async getProduct(id) {
    const response = await api.get(PRODUCT_ENDPOINT + id);

    return response.data;
  }

  static async getPopularProducts(limit = 5) {
    const response = await api.get(POPULAR_PRODUCTS_ENDPOINT, {
      params: { limit },
    });

    return response.data;
  }

  static async getDiscountedProducts() {
    const response = await api.get(DISCOUNTED_PRODUCTS_ENDPOINT);

    return response.data;
  }

  static async subscribe(email) {
    // response 409 means that subscription already exists
    const response = await api.post(SUBSCRIBE_ENDPOINT, { email });

    return response.data;
  }

  static async placeOrder(cart) {
    const { email, products } = cart;
    const response = await api.post(ORDERS_ENDPOINT, {
      email,
      products: products.map(({ productId, amount }) => ({
        productId,
        amount,
      })),
    });

    return response.data;
  }
}
