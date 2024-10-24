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
}
