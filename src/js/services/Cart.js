import Storage from './Storage';

const storageKey = Storage.CART_KEY;
const cartDefault = { email: '', products: [] };

export default class Cart {
  // Get cart object
  static get() {
    return Storage.get(storageKey) ?? cartDefault;
  }

  // Add single product to the cart
  static add(product, quantity = 1) {
    Cart.update(product, quantity);
  }

  // Update existed product's quantity. Add product if it's not there
  static update(product, amount = 1) {
    const cart = Cart.get();
    const productIndex = Cart.#findProductIndex(cart.products, product._id);

    // If product already in the cart, update the quantity
    if (productIndex !== null) {
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

    Storage.set(storageKey, cart);
  }

  // Remove product from cart
  static delete(productId) {
    const cart = Cart.get();
    const productIndex = Cart.#findProductIndex(cart.products, productId);

    if (productIndex !== null) {
      cart.products.splice(productIndex, 1);
      Storage.set(storageKey, cart);
    }
  }

  // Get single product from cart if exists
  static getProduct(productId) {
    const cart = Cart.get();
    const productIndex = Cart.#findProductIndex(cart.products, productId);

    return productIndex !== null ? cart.products[productIndex] : null;
  }

  // Get total price of all items in the cart
  static getTotal() {
    const cart = Cart.get();

    const total = cart.products.reduce((total, product) => {
      const lineItemTotal = product.product.price * product.amount;
      return total + lineItemTotal;
    }, 0);

    return Math.round(total * 100) / 100;
  }

  static getProducts() {
    return Cart.get().products;
  }

  static getEmail() {
    return Cart.get().email;
  }

  // Get count of products in the cart
  static getCount() {
    return Cart.get().products.length;
  }

  static setEmail(email) {
    Storage.set(storageKey, {
      ...Cart.get(),
      email,
    });
  }

  static clearCart() {
    Storage.set(storageKey, cartDefault);
  }

  static #findProductIndex(products, id) {
    const productIndex = products.findIndex(
      ({ productId }) => productId === id
    );

    return productIndex !== -1 ? productIndex : null;
  }
}
