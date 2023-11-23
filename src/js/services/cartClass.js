import storage from './storage';

const storageKey = storage.CART_KEY;

export default class Cart {
  static get() {
    let cart = storage.get(storageKey);

    if (!cart) {
      cart = { email: '', products: [] };
    }

    return cart;
  }

  static add(product, quantity = 1) {
    Cart.update(product, quantity);
  }

  static update(product, amount = 1) {
    const cart = Cart.get();
    const productIndex = Cart.#findProductIndex(cart.products, product._id);

    // If product already in the cart, update the quantity
    // Later we will change it to increment instead of overwrite
    if (productIndex) {
      cart.products[productIndex] = {
        ...cart.products[productIndex],
        amount,
      };
    } else {
      cart.products.push({
        productId: product._id,
        product,
        amount,
      });
    }

    storage.set(storageKey, cart);
  }

  static delete(product) {
    const cart = Cart.get();
    const productIndex = Cart.#findProductIndex(cart.products, product._id);

    if (productIndex) {
      cart.products[productIndex].splice(productIndex, 1);
    }
  }

  static getProduct(product) {
    const cart = Cart.get();
    const productIndex = Cart.#findProductIndex(cart.products, product._id);

    return productIndex ? cart.products[productIndex] : null;
  }

  static getTotal() {
    const cart = Cart.get();

    return cart.products.reduce((total, product) => {
      const lineItemTotal = product.product.price * product.amount;
      return total + lineItemTotal;
    }, 0);
  }

  static getCount() {
    return Cart.get().products.length;
  }

  static setEmail(email) {
    storage.set(storageKey, {
      ...Cart.get(),
      email,
    });
  }

  static #findProductIndex(products, id) {
    const productIndex = products.findIndex(
      ({ productId }) => productId === id
    );

    return productIndex !== -1 ? productIndex : null;
  }
}
