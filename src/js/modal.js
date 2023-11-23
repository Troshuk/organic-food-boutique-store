const closeModalButton = document.querySelector('.modal-close-btn');

const modal = document.querySelector('.modal-background');

closeModalButton.addEventListener('click', function () {
  modal.classList.add('is-hidden');
});
