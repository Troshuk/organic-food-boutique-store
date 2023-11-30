const closeModalSuccessButton = document.querySelector(
  '.success-modal-close-btn'
);

const modal = document.querySelector('.success-blackdrop');

closeModalSuccessButton.addEventListener('click', function () {
  modal.classList.add('is-hidden');
});
