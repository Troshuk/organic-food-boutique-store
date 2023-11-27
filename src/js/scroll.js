import throttle from 'lodash.throttle';
const ScrollUpBtn = document.querySelector('.scroll-up');

document.addEventListener('scroll', throttle(scrollTracker, 400));

function scrollTracker() {
  const scrolled = window.scrollY;
  const coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    ScrollUpBtn.classList.add('scroll-up-is-hidden');
  } else {
    ScrollUpBtn.classList.remove('scroll-up-is-hidden');
  }
}
