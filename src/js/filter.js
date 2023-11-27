import Filter from './services/Filter.js';
import Storage from './services/Storage.js';
import FoodBotiqueApi from './services/FoodBoutiqueApi.js';

const optionMenu = document.querySelector('.select-menu');
const selectBtn = optionMenu.querySelector('.select-btn');
const options = optionMenu.querySelectorAll('.options');
const sBtn_text = optionMenu.querySelector('.sBtn-text');

const optionCategory = document.querySelector('.select-menu-category');
const selectBtnCustom = optionCategory.querySelector('.select-btn-custom');
const optionsCategory = optionCategory.querySelector('.options');
const sBtn_textCategory = optionCategory.querySelector('.sBtn-text-select');

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
    let selectedOption = clickedOption.querySelector('.option-text').innerText;
    sBtn_textCategory.innerText = selectedOption;
    optionCategory.classList.remove('active');
  }
});

const ul = optionsCategory;
ul.innerHTML = '';

const categories = await Filter.getCategories();

categories.forEach(category => {
  const li = document.createElement('li');
  li.className = 'option-category';

  const span = document.createElement('span');
  span.className = 'option-text';
  span.textContent = category;

  li.appendChild(span);
  ul.appendChild(li);
});

const showAllOption = createShowAllOption();
ul.appendChild(showAllOption);

function createOption(optionName) {
  const li = document.createElement('li');
  li.className = 'option-category';

  const span = document.createElement('span');
  span.className = 'option-text';
  span.textContent = optionName;

  li.appendChild(span);
  return li;
}

function createShowAllOption(optionName) {
  const showAllOption = document.createElement('li');
  showAllOption.className = 'option-category';

  const span = document.createElement('span');
  span.className = 'option-text';
  span.textContent = optionName;

  showAllOption.appendChild(span);
  return showAllOption;
}

const searchIcon = document.getElementById('search-icon');
const searchInput = document.getElementById('search-item');

searchIcon.addEventListener('click', async function () {
  const keyword = searchInput.value.trim();

  if (keyword) {
    Filter.setKeyword(keyword);

    await updateContentBasedOnSearch();
  }
});

async function updateContentBasedOnSearch() {
  const filter = Filter.get();

  try {
    const products = await FoodBotiqueApi.getProducts(filter);

    console.log('Fetched Products:', products);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}
