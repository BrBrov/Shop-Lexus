function menuHandler() {
  const menu = document.querySelector('.header__navigator');
  menu.classList.add('open-menu');

  const closeMenuBTN = menu.querySelector('.header__close-img');
  closeMenuBTN.addEventListener('click', () => {
    menu.classList.remove('open-menu');
    menu.classList.add('close-menu');
    setTimeout(() => {menu.classList.remove('close-menu')}, 500);
  });
}

window.onload = () => {
  const openMenuBtn = document.querySelector('.header__menu');
  openMenuBtn.addEventListener('click', menuHandler);
};