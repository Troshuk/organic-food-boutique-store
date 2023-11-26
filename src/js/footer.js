// MODAL WINDOW
const refs = {
  openModalPolicy: document.querySelector('.js-modal-policy-open'),
  openModalTerms: document.querySelector('.js-modal-terms-open'),
  closeModalPolicyBtn: document.querySelector('.js-policy-close'),
  closeModalTermsBtn: document.querySelector('.js-terms-close'),
  policyLink: document.querySelector('.js-policy'),
  termsLink: document.querySelector('.js-terms'),

  openModalSubscribe: document.querySelector('.js-modal-subscribe-open'),
  closeModalSubscribeBtn: document.querySelector('.js-subscribe-close'),
  subscribeLink: document.querySelector('.js-subscribe'),
  subscribeText: document.querySelector('.subscribe-text'),

  openModalNotSubscribe: document.querySelector('.js-modal-not-subscribe-open'),
  closeModalNotSubscribeBtn: document.querySelector('.js-not-subscribe-close'),
  notSubscribeLink: document.querySelector('.js-not-subscribe'),
};

refs.openModalPolicy.addEventListener('click', () => {
  onPolicyClick();
  refs.closeModalPolicyBtn.addEventListener('click', onPolicyClick);
});

refs.openModalTerms.addEventListener('click', () => {
  onTermsClick();
  refs.closeModalTermsBtn.addEventListener('click', onTermsClick);
});

function onPolicyClick() {
  refs.policyLink.classList.toggle('is-hidden-policy');
}
function onTermsClick() {
  refs.termsLink.classList.toggle('is-hidden-policy');
}
// =================MODAL WINDOW SUBSCRIBE
import FoodBotiqueApi from './services/foodBoutiqueApi';

const footerForm = document.querySelector('.footer-subscribe-form');

footerForm.addEventListener('submit', onFooterFormSubmit);

function onFooterFormSubmit(e) {
  e.preventDefault();
  const formElements = e.currentTarget.elements;
  const email = formElements.email;

  FoodBotiqueApi.subscribe(email)
    .then(onSubscribeClick)
    .catch(onNotSubscribeClick);
}

refs.closeModalNotSubscribeBtn.addEventListener('click', onNotSubscribeClick);
function onNotSubscribeClick() {
  refs.notSubscribeLink.classList.toggle('is-hidden-not-subscribe');
}
// =================MODAL WINDOW SUBSCRIBE TEXT
function onSubscribeClick({ message }) {
  const subscribeText = document.querySelector('.subscribe-text');
  subscribeText.innerHTML = message;
  refs.subscribeLink.slassList.toggle('is-hidden-subscribe');
}
