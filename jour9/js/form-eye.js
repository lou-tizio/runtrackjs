$(function() {
  const password = $('#connex-password');
  const eyeIcon = $("#eye");
  eyeIcon.on("click",() =>{
    if (eyeIcon.hasClass("fa-eye")) {
      password.attr("type", "text");
      eyeIcon.removeClass("fa-eye");
      eyeIcon.addClass("fa-eye-slash");
    } else {
      password.attr("type", "password");
      eyeIcon.removeClass("fa-eye-slash");
      eyeIcon.addClass("fa-eye");
    }
  });
});