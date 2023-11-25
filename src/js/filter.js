document.addEventListener('DOMContentLoaded', function () {
  function closeOtherDropdowns(currentDropdown) {
    const allDropdowns = document.querySelectorAll(
      '.select-menu, .select-menu-category'
    );

    allDropdowns.forEach(dropdown => {
      if (
        dropdown !== currentDropdown &&
        dropdown.classList.contains('active')
      ) {
        dropdown.classList.remove('active');
      }
    });
  }

  const optionMenu = document.querySelector('.select-menu');
  const selectBtn = optionMenu.querySelector('.select-btn');
  const options = optionMenu.querySelectorAll('.option');
  const sBtn_text = optionMenu.querySelector('.sBtn-text');

  selectBtn.addEventListener('click', function () {
    closeOtherDropdowns(optionMenu);
    optionMenu.classList.toggle('active');
  });

  options.forEach(option => {
    option.addEventListener('click', function () {
      let selectedOption = option.querySelector('.option-text').innerText;
      sBtn_text.innerText = selectedOption;
      optionMenu.classList.remove('active');
    });
  });

  const optionCategory = document.querySelector('.select-menu-category');
  const selectBtnCustom = optionCategory.querySelector('.select-btn-custom');
  const optionsCategory = optionCategory.querySelectorAll('.option-category');
  const sBtn_textCategory = optionCategory.querySelector('.sBtn-text-select');

  selectBtnCustom.addEventListener('click', function () {
    closeOtherDropdowns(optionCategory);
    optionCategory.classList.toggle('active');
  });

  optionsCategory.forEach(option => {
    option.addEventListener('click', function () {
      let selectedOption = option.querySelector('.option-text').innerText;
      sBtn_textCategory.innerText = selectedOption;
      optionCategory.classList.remove('active');
    });
  });

  
  document.addEventListener('click', function (event) {
    const isClickInsideOptionMenu = optionMenu.contains(event.target);
    const isClickInsideOptionCategory = optionCategory.contains(event.target);

    if (!isClickInsideOptionMenu && optionMenu.classList.contains('active')) {
      optionMenu.classList.remove('active');
    }

    if (
      !isClickInsideOptionCategory &&
      optionCategory.classList.contains('active')
    ) {
      optionCategory.classList.remove('active');
    }
  });
});
