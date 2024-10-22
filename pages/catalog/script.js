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