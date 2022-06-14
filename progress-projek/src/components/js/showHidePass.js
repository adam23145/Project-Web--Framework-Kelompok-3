import $ from "jquery";

const showhidePass = () => {
  $(".show-hide").click(function () {
    $(this).toggleClass("fa-eye-slash fa-eye");
    var input = $($(".show-hide").attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
      $("#iconShowHide").css("color", "#5886ef");
    } else {
      input.attr("type", "password");
      $("#iconShowHide").css("color", "#d8d8d8");
    }
  });
  $(".show-hide2").click(function () {
    $(this).toggleClass("fa-eye-slash fa-eye");
    var input = $($(".show-hide2").attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
      $("#iconShowHide2").css("color", "#5886ef");
    } else {
      input.attr("type", "password");
      $("#iconShowHide2").css("color", "#d8d8d8");
    }
  });
};

export default showhidePass;
