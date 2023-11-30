import updateCartItemCount from './header';
import './hero';
import './filter';
import { fetchProducts } from './product-list';
import { getPopularProducts } from './popular-products';
import { getDiscountedProducts } from './discounted-products';
import './footer';
import './scroll';
import debounce from 'lodash.debounce';

const tabletBreakPoint = 768;
const desktopBreakPoint = 1440;

// Update cart count on initial load of the page
updateCartItemCount();

// Page loaded, render product list
fetchProducts();
getPopularProducts();
getDiscountedProducts();

let previousDeviceType = getScreenType(window.innerWidth);

window.addEventListener(
  'resize',
  debounce(() => {
    const newDeviceType = getScreenType(window.innerWidth);

    if (previousDeviceType !== newDeviceType) {
      previousDeviceType = newDeviceType;
      fetchProducts();
      getPopularProducts();
    }
  }, 300)
);

function getScreenType(width) {
  switch (true) {
    case width < tabletBreakPoint:
      return 'mobile';

    case width >= desktopBreakPoint:
      return 'desktop';
    default:
      return 'tablet';
  }
}
