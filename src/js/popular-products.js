// import FoodBotiqueApi from './services/foodBoutiqueApi';
// // import Notiflix from 'notiflix';


// FoodBotiqueApi.subscribe('email').then(console.log).catch(console.log);



// MODAL WINDOW
const refs = {
    openModalPolicy: document.querySelector('.js-modal-policy-open'),
    openModalTerms: document.querySelector('.js-modal-terms-open'),
    closeModalPolicyBtn: document.querySelector('.js-policy-close'),
    closeModalTermsBtn: document.querySelector('.js-terms-close'),
    policyLink: document.querySelector('.js-policy'),
    termsLink: document.querySelector('.js-terms'),
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

