// $(document).ready(function() {
//     $(".faq-question").click(function() {
//         $(this).toggleClass("active");
//         $(this).next(".faq-answer").slideToggle(300);
//         // Переключение иконки
//         $(this).find(".toggle-icon");
//     });
// });

const faqQuestions = document.querySelectorAll('.faq-item');

faqQuestions.forEach( item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  question.addEventListener('click', () => {
    question.classList.toggle('active');
    answer.classList.toggle('open');
  });
});