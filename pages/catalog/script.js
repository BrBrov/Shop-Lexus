// function menuHandler() {
//   const menu = document.querySelector('.header__navigator');
//   menu.classList.add('open-menu');

//   const closeMenuBTN = menu.querySelector('.header__close-img');
//   closeMenuBTN.addEventListener('click', () => {
//     menu.classList.remove('open-menu');
//     menu.classList.add('close-menu');
//     setTimeout(() => {menu.classList.remove('close-menu')}, 500);
//   });

// }

// window.onload = () => {
//   const openMenuBtn = document.querySelector('.header__menu');
//   openMenuBtn.addEventListener('click', menuHandler);
// };

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

console.log('done!!!');