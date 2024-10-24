function swiperHandler(target) {
  if (target.innerWidth < 768) {
    swiper.disable();
  }

  if (target.innerWidth > 768) {
    swiper.enable();
  }
}

function menuHandler() {
  const menu = document.querySelector('.header__navigator');
  menu.classList.add('open-menu');

  const closeMenuBTN = menu.querySelector('.header__close-img');
  closeMenuBTN.addEventListener('click', () => {
    menu.classList.remove('open-menu');
    menu.classList.add('close-menu');
    setTimeout(() => { menu.classList.remove('close-menu') }, 500);
  });
}


window.onload = () => {

  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3000,
    },
    mousewheel: {
      invert: true,
    }
  });

  swiperHandler({ target: window });

  const openMenuBtn = document.querySelector('.header__menu');

  openMenuBtn.addEventListener('click', menuHandler);

  window.addEventListener('resize', swiperHandler);
}
