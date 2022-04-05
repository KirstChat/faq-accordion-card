const dropdownItems = document.querySelectorAll('.dropdown__item');

dropdownItems.forEach(dropdownItem => {
  dropdownItem.addEventListener('click', () => {
    dropdownItem.classList.toggle('active');
  });
});
