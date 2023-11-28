import updateCartItemCount from './header';
import './hero';
import './filter';
import fetchProducts from './product-list';
import './popular-products';
import './discounted-products';
import './footer';
import './scroll';
import './loader';
import './page-flow';

// Update cart count on initial load of the page
updateCartItemCount();

// Page loaded, render product list
fetchProducts();
