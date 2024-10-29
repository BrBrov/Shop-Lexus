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

function autoResize() {
  textarea.style.height = 'auto';
  textarea.style.height = (textarea.scrollHeight + 7) +'px';
  console.log((textarea.scrollHeight - 60) +'px');
}

const textarea = document.querySelector('#car__desription');

window.onload = () => {
  const openMenuBtn = document.querySelector('.header__menu');
  openMenuBtn.addEventListener('click', menuHandler);  

  autoResize();

  ['input', 'cut', 'paste', 'drop'].forEach((event) => {
    textarea.addEventListener(event, autoResize);
  });
};

window.onresize = () => autoResize();

