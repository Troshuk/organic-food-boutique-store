const closeModalSuccessButton = document.querySelector('.success-modal-close-btn');

const modal = document.querySelector('.success-blackdrop');

closeModalButton.addEventListener('click', function () {
  modal.classList.add('is-hidden');
});
