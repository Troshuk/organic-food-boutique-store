import updateCartItemCount from './header';
import './footer';
import './modal-success';

// Update cart count on initial load of the page
updateCartItemCount();

// Scroll (::after) always on visible
document.addEventListener('DOMContentLoaded', function() {
  const basketListWrapper = document.querySelector('.basket-list-wrapper');

  basketListWrapper.addEventListener('scroll', function() {
    const scrollTop = basketListWrapper.scrollTop;
      basketListWrapper.style.setProperty('--scroll-top', scrollTop + 'px');
    
  });
});
