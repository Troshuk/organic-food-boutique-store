import FoodBotiqueApi from './services/FoodBoutiqueApi';
import Filter from './services/Filter';
import fetchProducts from './product-list';

const optionMenu = document.querySelector('.select-menu');
const selectBtn = optionMenu.querySelector('.select-btn');
const options = optionMenu.querySelectorAll('.options');
const sBtn_text = optionMenu.querySelector('.sBtn-text');

const optionCategory = document.querySelector('.select-menu-category');
const selectBtnCustom = optionCategory.querySelector('.select-btn-custom');
const optionsCategory = optionCategory.querySelector('.options');
const sBtn_textCategory = optionCategory.querySelector('.sBtn-text-select');

const searchIcon = document.getElementById('search-icon');
const searchInput = document.getElementById('search-item');
function closeDropDown() {
  closeOtherDropdowns(null);
}

function closeOtherDropdowns(currentDropdown) {
  const allDropdowns = document.querySelectorAll(
    '.select-menu, .select-menu-category'
  );

  allDropdowns.forEach(dropdown => {
    if (dropdown !== currentDropdown && dropdown.classList.contains('active')) {
      dropdown.classList.remove('active');
    }
  });
}

// Click on sort dropdown
selectBtn.addEventListener('click', function (event) {
  // Close the other drop down
  closeOtherDropdowns(optionMenu);
  optionMenu.classList.toggle('active');
  // Listener for clicks outside of the select to close it
  document.addEventListener('click', closeDropDown);
  event.stopPropagation();
});

optionMenu.addEventListener('click', function (event) {
  const clickedOption = event.target.closest('.option');
  if (clickedOption) {
    let selectedOption = clickedOption.querySelector('.option-text').innerText;
    sBtn_text.innerText = selectedOption;
    optionMenu.classList.remove('active');
  }
});

selectBtnCustom.addEventListener('click', function (event) {
  closeOtherDropdowns(optionCategory);
  optionCategory.classList.toggle('active');
  event.stopPropagation();
});

optionsCategory.addEventListener('click', function (event) {
  const clickedOption = event.target.closest('.option-category');
  if (clickedOption) {
    let selectedCategory = clickedOption.dataset.originalCategory;
    sBtn_textCategory.innerText = selectedCategory
      ? selectedCategory.replace(/_/g, ' ')
      : 'Show All';
    optionCategory.classList.remove('active');

    Filter.setCategory(selectedCategory);

    fetchProducts();
  }
});

const ul = optionsCategory;
ul.innerHTML = '';

const originalCategories = await Filter.getCategories();

originalCategories.forEach(category => {
  const li = document.createElement('li');
  li.className = 'option-category';
  li.dataset.originalCategory = category;

  const span = document.createElement('span');
  span.className = 'option-text';
  span.textContent = category.replace(/_/g, ' ');

  li.appendChild(span);
  ul.appendChild(li);
});

const showAllOption = createShowAllOption();
ul.appendChild(showAllOption);

function createOption(optionName) {
  const li = document.createElement('li');
  li.className = 'option-category';
  li.dataset.category = optionName;

  const span = document.createElement('span');
  span.className = 'option-text';
  span.textContent = optionName;

  li.appendChild(span);
  return li;
}

function createShowAllOption() {
  const showAllOption = document.createElement('li');
  showAllOption.className = 'option-category';
  showAllOption.dataset.category = 'Show All';

  const span = document.createElement('span');
  span.className = 'option-text';
  span.textContent = 'Show All';

  showAllOption.appendChild(span);

  showAllOption.addEventListener('click', function () {
    sBtn_textCategory.innerText = 'Show All';
    optionCategory.classList.remove('active');
    Filter.setCategory(undefined);
    fetchProducts();
  });

  return showAllOption;
}
searchIcon.addEventListener('click', function () {
  const keyword = searchInput.value.trim();

  if (keyword) {
    Filter.setKeyword(keyword);

    fetchProducts();
  }
});
function updateContentBasedOnCategory(category) {
  const savedOptions = storage.getFromStorage('options');
  savedOptions.category = category ? category : null;
  localStorage.setItem('options', JSON.stringify(savedOptions));

  fetchProducts();
}
