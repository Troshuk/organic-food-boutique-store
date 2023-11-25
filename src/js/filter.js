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

const optionMenu = document.querySelector('.select-menu');
const selectBtn = optionMenu.querySelector('.select-btn');
const options = optionMenu.querySelectorAll('.options');
const sBtn_text = optionMenu.querySelector('.sBtn-text');

selectBtn.addEventListener('click', function (event) {
  closeOtherDropdowns(optionMenu);
  optionMenu.classList.toggle('active');
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

const optionCategory = document.querySelector('.select-menu-category');
const selectBtnCustom = optionCategory.querySelector('.select-btn-custom');
const optionsCategory = optionCategory.querySelector('.options');
const sBtn_textCategory = optionCategory.querySelector('.sBtn-text-select');

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

document.addEventListener('click', function () {
  closeOtherDropdowns(null);
});
