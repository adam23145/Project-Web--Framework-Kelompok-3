import $ from "jquery";

const changeIconMenu = () => {
  $("#courses").hover(function () {
    if ($("#item2").attr("src") === require("../assets/ico/SchoolW.png")) {
      $("#item2").attr("src", require("../assets/ico/School.png"));
    } else {
      $("#item2").attr("src", require("../assets/ico/SchoolW.png"));
    }
  });
  $("#schedule").hover(function () {
    if ($("#item3").attr("src") === require("../assets/ico/ScheduleW.png")) {
      $("#item3").attr("src", require("../assets/ico/Schedule.png"));
    } else {
      $("#item3").attr("src", require("../assets/ico/ScheduleW.png"));
    }
  });
  $("#teachers").hover(function () {
    if ($("#item4").attr("src") === require("../assets/ico//peopleW.png")) {
      $("#item4").attr("src", require("../assets/ico//people.png"));
    } else {
      $("#item4").attr("src", require("../assets/ico//peopleW.png"));
    }
  });
  $("#quiz").hover(function () {
    if ($("#item5").attr("src") === require("../assets/ico/QuizW.png")) {
      $("#item5").attr("src", require("../assets/ico/Quiz.png"));
    } else {
      $("#item5").attr("src", require("../assets/ico/QuizW.png"));
    }
  });
};

export default changeIconMenu;
