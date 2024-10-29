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

function sliderHandle() {
  const slidesElements = document.querySelectorAll('.swiper__slide');
  const pagination = document.querySelectorAll('.swiper-pag');  
}

window.onload = () => {
  const openMenuBtn = document.querySelector('.header__menu');
  openMenuBtn.addEventListener('click', menuHandler);

  const swiperWrapper = document.querySelector('.swiper__wrapper');
  swiperWrapper.addEventListener('mousemove', (e) => console.log(e));
};
