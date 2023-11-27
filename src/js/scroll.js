const ScrollUpBtn = document.querySelector('.scroll-up');

window.addEventListener('scroll', Scrolltracker);

ScrollUpBtn.addEventListener('click', ScrollUp);

function Scrolltracker() {
  const scrolled = window.pageYOffset;

  const coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    ScrollUpBtn.classList.add('scroll-up-is-hidden');
  } else {
    ScrollUpBtn.classList.remove('scroll-up-is-hidden');
  }
}

function ScrollUp() {
  if (window.pageYOffset > 0) {
    window.scrollTo(0, 0);
    setTimeout(0, 0);
  }
}