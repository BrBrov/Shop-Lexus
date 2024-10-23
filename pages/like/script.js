const sliderOne = document.querySelector('.min__range');
const sliderTwo = document.querySelector('.max__range');

const displayValOne = document.getElementById('price-min-value');
const displayValTwo = document.getElementById('price-max-value');

const sliderTrack = document.querySelector('.range__track');

const minGap = 0;
const sliderMaxValue = document.querySelector('.min__range').max;

function slideOne() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  displayValOne.textContent = sliderOne.value;
}

function slideTwo() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  displayValTwo.textContent = sliderTwo.value;
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

  const openMenuBtn = document.querySelector('.header__menu');

  openMenuBtn.addEventListener('click', menuHandler);

  sliderOne.addEventListener('input', slideOne);
  sliderTwo.addEventListener('input', slideTwo);

  $(document).ready(function () {
    $(".faq-question").click(function () {
      $(this).toggleClass("active");
      $(this).next(".faq-answer").slideToggle(300);
      // Переключение иконки
      var icon = $(this).find(".toggle-icon");

    });
  });
};