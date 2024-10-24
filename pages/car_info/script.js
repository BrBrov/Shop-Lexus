function swiperHandler(target) {
  if (target.innerWidth < 768) {
    swiper.disable();
  }

  if (target.innerWidth > 768) {
    swiper.enable();
  }
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

window.addEventListener('resize', swiperHandler);
}
