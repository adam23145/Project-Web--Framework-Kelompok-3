import $ from 'jquery';
function Searchbar() {
$(document).ready(function ($) {
  $(".search-txt")
    .focus(function () {
      $(this).parent().css("background", "#F5F7FF");
      $(".search-btn").addClass("focused");
    })
    .blur(function () {
      $(this).parent().css("background", "#F9FAFF");
      $(".search-btn").removeClass("focused");
    });
});
}
export default Searchbar;