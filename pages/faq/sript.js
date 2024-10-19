$(document).ready(function() {
    $(".faq-question").click(function() {
        $(this).toggleClass("active");
        $(this).next(".faq-answer").slideToggle(300);
        // Переключение иконки
        $(this).find(".toggle-icon");
    });
});