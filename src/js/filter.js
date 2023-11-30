import Filter from './services/Filter';
import { fetchProducts } from './product-list';

// Sort
const sortContainer = document.querySelector('.select-menu');
const sortSelect = sortContainer.querySelector('.select-btn');
const sortSelectedText = sortContainer.querySelector('.sBtn-text');

// Category
const categoryContainer = document.querySelector('.select-menu-category');
const categorySelect = categoryContainer.querySelector('.select-btn-custom');
const categorySelectedText =
  categoryContainer.querySelector('.sBtn-text-select');

// Search
const searchForm = document.querySelector('.search-form');
const searchIcon = document.getElementById('search-icon');
const searchInput = document.getElementById('search-item');

// Check if keyword is already in the storage
const currentSearchKeyword = Filter.getValueByKey('keyword');

if (currentSearchKeyword) {
  // Populate search input
  searchInput.value = currentSearchKeyword;
}

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

  document.removeEventListener('click', closeDropDown);
}

createSortOptions();

// Click on sort dropdown
sortSelect.addEventListener('click', event => {
  // Close the other drop down
  closeOtherDropdowns(sortContainer);
  sortContainer.classList.toggle('active');
  event.stopPropagation();

  if (sortContainer.classList.contains('active')) {
    // Listener for clicks outside of the select to close it
    document.addEventListener('click', closeDropDown);
  }
});

categorySelect.addEventListener('click', event => {
  closeOtherDropdowns(categoryContainer);
  categoryContainer.classList.toggle('active');
  event.stopPropagation();

  if (categoryContainer.classList.contains('active')) {
    // Listener for clicks outside of the select to close it
    document.addEventListener('click', closeDropDown);
  }
});

function createSortOptions() {
  const sortOptionsUl = document.createElement('ul');
  sortOptionsUl.className = 'options';

  // Check if sort by is already in the storage
  const currentSortBy = Filter.getValueByKey('sortBy');

  if (currentSortBy?.name) {
    // Populate select with current sort option
    sortSelectedText.innerText = currentSortBy.name;
  }

  Filter.getSortList().forEach(sortOption => {
    const sortOptionEl = document.createElement('li');
    sortOptionEl.className = 'option';
    sortOptionEl.dataset.sortByKey = sortOption.key;
    sortOptionEl.dataset.sortByValue = sortOption.value;

    const span = document.createElement('span');
    span.className = 'option-text';
    span.textContent = sortOption.name;

    // Make option active on first load
    if (sortSelectedText.innerText === span.textContent) {
      sortOptionEl.classList.add('active');
    }

    sortOptionEl.appendChild(span);
    sortOptionsUl.appendChild(sortOptionEl);
  });

  sortContainer.appendChild(sortOptionsUl);

  sortContainer.addEventListener('click', function (event) {
    const clickedOption = event.target.closest('.option');

    if (clickedOption) {
      let selectedOption = clickedOption.firstChild.innerText;
      sortSelectedText.innerText = selectedOption;
      sortContainer.classList.remove('active');

      // Handle active option
      const activeOption = sortOptionsUl.querySelector('.option.active');

      if (activeOption) {
        activeOption.classList.remove('active');
      }

      clickedOption.classList.add('active');

      Filter.setSortBy(
        clickedOption.dataset.sortByKey,
        clickedOption.dataset.sortByValue
      );

      fetchProducts();
    }
  });
}

// Populate categories
Filter.getCategories().then(categories => {
  const categoryOptionsUl = document.createElement('ul');
  categoryOptionsUl.className = 'options';

  // Check if category is already in the storage
  const currentCategory = Filter.getValueByKey('category');

  if (currentCategory) {
    // Populate select with current category
    categorySelectedText.innerText = currentCategory.replace(/_/g, ' ');
  }

  // Add Show All category option
  categories.push('Show All');

  // Create select with categories
  categories.forEach(category => {
    const categoryOption = document.createElement('li');
    categoryOption.className = 'option-category';

    // Don't add option value for this category, should be underfined
    if (category !== 'Show All') {
      categoryOption.dataset.originalCategory = category;
    }

    const span = document.createElement('span');
    span.className = 'option-text';
    span.textContent = category.replace(/_/g, ' ');

    // Make option active on first load
    if (categorySelectedText.innerText === span.textContent) {
      categoryOption.classList.add('active');
    }

    categoryOption.appendChild(span);
    categoryOptionsUl.appendChild(categoryOption);
  });

  categoryContainer.appendChild(categoryOptionsUl);

  categoryOptionsUl.addEventListener('click', function (event) {
    const clickedOption = event.target.closest('.option-category');

    if (clickedOption) {
      let selectedCategory = clickedOption.dataset.originalCategory;
      categorySelectedText.innerText = clickedOption.textContent;
      categoryContainer.classList.remove('active');

      // Handle active option
      const activeOption = categoryOptionsUl.querySelector(
        '.option-category.active'
      );

      if (activeOption) {
        activeOption.classList.remove('active');
      }

      clickedOption.classList.add('active');

      Filter.setCategory(selectedCategory);

      fetchProducts();
    }
  });
});

searchForm.addEventListener('submit', submitSearch);
searchIcon.addEventListener('click', submitSearch);
searchInput.addEventListener('focusout', submitSearch);

function submitSearch(e) {
  e.preventDefault();
  const keyword = searchInput.value.trim();

  if (keyword === Filter.getValueByKey('keyword')) {
    return;
  }

  Filter.setKeyword(keyword);
  fetchProducts();
}
