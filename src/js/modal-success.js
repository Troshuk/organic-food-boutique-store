const closeModalSuccessButton = document.querySelector(
  '.success-modal-close-btn'
);

const modal = document.querySelector('.success-blackdrop');
const body = document.querySelector('body');

closeModalSuccessButton.addEventListener('click', function () {
  modal.classList.add('is-hidden');
  body.classList.remove('is-modal-open')
});

