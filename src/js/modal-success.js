const closeModalSuccessButton = document.querySelector(
  '.success-modal-close-btn'
);
const modal = document.querySelector('.success-blackdrop');
const modalTitle = document.querySelector('.success-modal-title');
const modalText = document.querySelector('.success-modal-text');

export default function openOrderModal(
  message,
  isSuccess,
  callbackFunction = () => {}
) {
  modalTitle.textContent = isSuccess ? 'Order success' : 'Order error';
  modalText.textContent = message;

  document.body.classList.add('is-modal-open');
  modal.classList.remove('is-hidden');

  closeModalSuccessButton.addEventListener('click', function () {
    modal.classList.add('is-hidden');
    document.body.classList.remove('is-modal-open');
    callbackFunction();
  });
}
