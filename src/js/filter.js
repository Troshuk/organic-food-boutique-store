import '../css/partials/filters.css';
import SlimSelect from 'slim-select';
document.addEventListener('DOMContentLoaded', function () {
  const ref = {
    selector: document.querySelector('.categories'),
    divSelectElement: document.querySelector('.select-element'),
  };
  const { selector, divSelectElement } = ref;

  divSelectElement.classList.add('is-hidden');

  fetch('https://food-boutique.b.goit.study/api/products/categories')
    .then(response => response.json())
    .then(data => {
      console.log('Fetched data:', data);

      if (Array.isArray(data)) {
        const arrCategories = data.map(category => ({
          text: category.name,
          value: category.id,
        }));

        new SlimSelect('.categories', {
          data: arrCategories,
        });
      } else {
        console.error('Data is not an array:', data);
      }
    })
    .catch(error => {
      console.error('Error fetching categories:', error);
    });
});
