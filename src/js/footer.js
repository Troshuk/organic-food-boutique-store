import FoodBotiqueApi from './services/foodBoutiqueApi';

// MODAL WINDOW
const refs = {
  openModalPolicy: document.querySelector('.js-modal-policy-open'),
  openModalTerms: document.querySelector('.js-modal-terms-open'),
  closeModalPolicyBtn: document.querySelector('.js-policy-close'),
  closeModalTermsBtn: document.querySelector('.js-terms-close'),
  policyLink: document.querySelector('.js-policy'),
  termsLink: document.querySelector('.js-terms'),

  footerForm: document.querySelector('.footer-subscribe-form'),

  closeModalSubscribeBtn: document.querySelector('.js-subscribe-close'),
  subscribeLink: document.querySelector('.js-subscribe'),
  subscribeText: document.querySelector('.subscribe-text'),
};

refs.openModalPolicy.addEventListener('click', () => {
  onPolicyClick();
  refs.closeModalPolicyBtn.addEventListener('click', onPolicyClick, {
    once: true,
  });
});

refs.openModalTerms.addEventListener('click', () => {
  onTermsClick();
  refs.closeModalTermsBtn.addEventListener('click', onTermsClick, {
    once: true,
  });
});

function onPolicyClick() {
  refs.policyLink.classList.toggle('is-hidden-policy');
}

function onTermsClick() {
  refs.termsLink.classList.toggle('is-hidden-policy');
}

// =================MODAL WINDOW SUBSCRIBE

refs.footerForm.addEventListener('submit', onFooterFormSubmit);

function onFooterFormSubmit(e) {
  e.preventDefault();
  const formElements = e.currentTarget.elements;
  const email = formElements.email.value;

  FoodBotiqueApi.subscribe(email)
    .then(response => {
      onSubscribeClick(response);
      refs.footerForm.reset();
    })
    .catch(onNotSubscribeClick);
}

function onNotSubscribeClick(e) {
  let message = 'Your subscription to our store has already been made before';

  if (e.response.status !== 409) {
    message = 'Invalid email address, please double check your email';

    if (e.response.status >= 500) {
      message = 'Server error, please try again later';
    }
  }

  onSubscribeClick({ message });
}

// =================MODAL WINDOW SUBSCRIBE TEXT
function onSubscribeClick({ message }) {
  refs.subscribeText.innerHTML = message;
  refs.subscribeLink.classList.toggle('is-hidden-subscribe');

  refs.closeModalSubscribeBtn.addEventListener(
    'click',
    () => refs.subscribeLink.classList.toggle('is-hidden-subscribe'),
    { once: true }
  );
}
