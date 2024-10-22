const sliderOne = document.querySelector(".min__range");
const sliderTwo = document.querySelector(".max__range");

const displayValOne = document.getElementById("price-min-value");
const displayValTwo = document.getElementById("price-max-value");
const sliderTrack = document.querySelector(".range__track");
const minGap = document.querySelector(".min__range").min;
const sliderMaxValue = document.querySelector(".min__range").max;

window.onload = () => {

  $(document).ready(function() {
  $(".faq-question").click(function() {
      $(this).toggleClass("active");
      $(this).next(".faq-answer").slideToggle(300);
      // Переключение иконки
      var icon = $(this).find(".toggle-icon");

  });
});
};