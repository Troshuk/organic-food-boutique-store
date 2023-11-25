import FoodBotiqueApi from './services/foodBoutiqueApi';
// import Notiflix from 'notiflix';

const footerForm = document.querySelector('.footer-subscribe-form');

footerForm.addEventListener('submit', onFooterFormSubmit);

function onFooterFormSubmit(e) {
  e.preventDefault();
  const formElements = e.currentTarget.elements;
  const email = formElements.email.value;

    console.log(email);

FoodBotiqueApi.subscribe(email).then(console.log).catch(console.error);
}


