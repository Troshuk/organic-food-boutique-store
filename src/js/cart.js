import updateCartItemCount from './header';
import './footer';
import './modal-success';

// Update cart count on initial load of the page
updateCartItemCount();

// Scroll (::after) always on visible
// document.addEventListener('DOMContentLoaded', function() {
//   const basketListWrapper = document.querySelector('.basket-list-wrapper');

//   basketListWrapper.addEventListener('scroll', function() {
//     const scrollTop = basketListWrapper.scrollTop;
//       basketListWrapper.style.setProperty('--scroll-top', scrollTop + 'px');
    
//   });
// });


document.addEventListener('DOMContentLoaded', function() {
  const basketListWrapper = document.querySelector('.basket-list-wrapper');
  const basketList = document.querySelector('.cart-basket-list');

  const containerHeight = basketListWrapper.clientHeight;
  const listHeight = basketList.scrollHeight;
  const scrollbarHeight = (containerHeight / listHeight) * containerHeight;

  basketListWrapper.style.height = scrollbarHeight + 'px';

  basketListWrapper.addEventListener('scroll', function() {
    const scrollTop = basketListWrapper.scrollTop;
    basketListWrapper.style.height = scrollbarHeight +35 + 'px'
      basketListWrapper.style.setProperty('--scroll-top', scrollTop + 'px');
    
  });
});
