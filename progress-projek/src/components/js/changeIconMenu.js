import $ from "jquery";

const changeIconMenu = () => {
  //Page Dashboard
  $("#main #courses").hover(function () {
    if ($("#main #courses #item2").attr("src") === require("../assets/ico/SchoolW.png")) {
      $("#main #courses #item2").attr("src", require("../assets/ico/School.png"));
    } else {
      $("#main #courses #item2").attr("src", require("../assets/ico/SchoolW.png"));
    }
  });
  $("#main #schedule").hover(function () {
    if ($("#main #schedule #item3").attr("src") === require("../assets/ico/ScheduleW.png")) {
      $("#main #schedule #item3").attr("src", require("../assets/ico/Schedule.png"));
    } else {
      $("#main #schedule #item3").attr("src", require("../assets/ico/ScheduleW.png"));
    }
  });
  $("#main #teachers").hover(function () {
    if ($("#main #teachers #item4").attr("src") === require("../assets/ico//peopleW.png")) {
      $("#main #teachers #item4").attr("src", require("../assets/ico/people.png"));
    } else {
      $("#main #teachers #item4").attr("src", require("../assets/ico/peopleW.png"));
    }
  });
  $("#main #quiz").hover(function () {
    if ($("#main #quiz #item5").attr("src") === require("../assets/ico/QuizW.png")) {
      $("#main #quiz #item5").attr("src", require("../assets/ico/Quiz.png"));
    } else {
      $("#main #quiz #item5").attr("src", require("../assets/ico/QuizW.png"));
    }
  });

  //Page Courses
  $("#courses #dashboard").hover(function () {
    if ($("#courses #dashboard #item1").attr("src") === require("../assets/ico/DashboardIcoW.png")) {
      $("#courses #dashboard #item1").attr("src", require("../assets/ico/DashboardIco.png"));
    } else {
      $("#courses #dashboard #item1").attr("src", require("../assets/ico/DashboardIcoW.png"));
    }
  });
  $("#courses #schedule").hover(function () {
    if ($("#courses #schedule #item3").attr("src") === require("../assets/ico/ScheduleW.png")) {
      $("#courses #schedule #item3").attr("src", require("../assets/ico/Schedule.png"));
    } else {
      $("#courses #schedule #item3").attr("src", require("../assets/ico/ScheduleW.png"));
    }
  });
  $("#courses #teachers").hover(function () {
    if ($("#courses #teachers #item4").attr("src") === require("../assets/ico/peopleW.png")) {
      $("#courses #teachers #item4").attr("src", require("../assets/ico/people.png"));
    } else {
      $("#courses #teachers #item4").attr("src", require("../assets/ico/peopleW.png"));
    }
  });
  $("#courses #quiz").hover(function () {
    if ($("#courses #quiz #item5").attr("src") === require("../assets/ico/QuizW.png")) {
      $("#courses #quiz #item5").attr("src", require("../assets/ico/Quiz.png"));
    } else {
      $("#courses #quiz #item5").attr("src", require("../assets/ico/QuizW.png"));
    }
  });

  //Page Teachers
  $("#teachers #dashboard").hover(function () {
    if ($("#teachers #dashboard #item1").attr("src") === require("../assets/ico/DashboardIcoW.png")) {
      $("#teachers #dashboard #item1").attr("src", require("../assets/ico/DashboardIco.png"));
    } else {
      $("#teachers #dashboard #item1").attr("src", require("../assets/ico/DashboardIcoW.png"));
    }
  });
  $("#teachers #courses").hover(function () {
    if ($("#teachers #courses #item2").attr("src") === require("../assets/ico/SchoolW.png")) {
      $("#teachers #courses #item2").attr("src", require("../assets/ico/School.png"));
    } else {
      $("#teachers #courses #item2").attr("src", require("../assets/ico/SchoolW.png"));
    }
  });
  $("#teachers #schedule").hover(function () {
    if ($("#teachers #schedule #item3").attr("src") === require("../assets/ico/ScheduleW.png")) {
      $("#teachers #schedule #item3").attr("src", require("../assets/ico/Schedule.png"));
    } else {
      $("#teachers #schedule #item3").attr("src", require("../assets/ico/ScheduleW.png"));
    }
  });
  $("#teachers #quiz").hover(function () {
    if ($("#teachers #quiz #item5").attr("src") === require("../assets/ico/QuizW.png")) {
      $("#teachers #quiz #item5").attr("src", require("../assets/ico/Quiz.png"));
    } else {
      $("#teachers #quiz #item5").attr("src", require("../assets/ico/QuizW.png"));
    }
  });

  //Page Admin Dashboard
  $("#adminDashboard #courses").hover(function () {
    if ($("#adminDashboard #courses #item2").attr("src") === require("../assets/ico/SchoolW.png")) {
      $("#adminDashboard #courses #item2").attr("src", require("../assets/ico/School.png"));
    } else {
      $("#adminDashboard #courses #item2").attr("src", require("../assets/ico/SchoolW.png"));
    }
  });
  $("#adminDashboard #schedule").hover(function () {
    if ($("#adminDashboard #schedule #item3").attr("src") === require("../assets/ico/ScheduleW.png")) {
      $("#adminDashboard #schedule #item3").attr("src", require("../assets/ico/Schedule.png"));
    } else {
      $("#adminDashboard #schedule #item3").attr("src", require("../assets/ico/ScheduleW.png"));
    }
  });
  $("#adminDashboard #teachers").hover(function () {
    if ($("#adminDashboard #teachers #item4").attr("src") === require("../assets/ico/peopleW.png")) {
      $("#adminDashboard #teachers #item4").attr("src", require("../assets/ico/people.png"));
    } else {
      $("#adminDashboard #teachers #item4").attr("src", require("../assets/ico/peopleW.png"));
    }
  });
  $("#adminDashboard #students").hover(function () {
    if ($("#adminDashboard #students #item5").attr("src") === require("../assets/ico/peopleW.png")) {
      $("#adminDashboard #students #item5").attr("src", require("../assets/ico/people.png"));
    } else {
      $("#adminDashboard #students #item5").attr("src", require("../assets/ico/peopleW.png"));
    }
  });
  $("#adminDashboard #quiz").hover(function () {
    if ($("#adminDashboard #quiz #item6").attr("src") === require("../assets/ico/QuizW.png")) {
      $("#adminDashboard #quiz #item6").attr("src", require("../assets/ico/Quiz.png"));
    } else {
      $("#adminDashboard #quiz #item6").attr("src", require("../assets/ico/QuizW.png"));
    }
  });

  //Page Admin Teachers
  $("#adminTeacher #dashboard").hover(function () {
    if ($("#adminTeacher #dashboard #item1").attr("src") === require("../assets/ico/DashboardIcoW.png")) {
      $("#adminTeacher #dashboard #item1").attr("src", require("../assets/ico/DashboardIco.png"));
    } else {
      $("#adminTeacher #dashboard #item1").attr("src", require("../assets/ico/DashboardIcoW.png"));
    }
  });
  $("#adminTeacher #courses").hover(function () {
    if ($("#adminTeacher #courses #item2").attr("src") === require("../assets/ico/SchoolW.png")) {
      $("#adminTeacher #courses #item2").attr("src", require("../assets/ico/School.png"));
    } else {
      $("#adminTeacher #courses #item2").attr("src", require("../assets/ico/SchoolW.png"));
    }
  });
  $("#adminTeacher #schedule").hover(function () {
    if ($("#adminTeacher #schedule #item3").attr("src") === require("../assets/ico/ScheduleW.png")) {
      $("#adminTeacher #schedule #item3").attr("src", require("../assets/ico/Schedule.png"));
    } else {
      $("#adminTeacher #schedule #item3").attr("src", require("../assets/ico/ScheduleW.png"));
    }
  });
  $("#adminTeacher #students").hover(function () {
    if ($("#adminTeacher #students #item5").attr("src") === require("../assets/ico/peopleW.png")) {
      $("#adminTeacher #students #item5").attr("src", require("../assets/ico/people.png"));
    } else {
      $("#adminTeacher #students #item5").attr("src", require("../assets/ico/peopleW.png"));
    }
  });
  $("#adminTeacher #quiz").hover(function () {
    if ($("#adminTeacher #quiz #item6").attr("src") === require("../assets/ico/QuizW.png")) {
      $("#adminTeacher #quiz #item6").attr("src", require("../assets/ico/Quiz.png"));
    } else {
      $("#adminTeacher #quiz #item6").attr("src", require("../assets/ico/QuizW.png"));
    }
  });

  //Page Admin Teachers
  $("#adminTeachers #dashboard").hover(function () {
    if ($("#adminTeachers #dashboard #item1").attr("src") === require("../assets/ico/DashboardIcoW.png")) {
      $("#adminTeachers #dashboard #item1").attr("src", require("../assets/ico/DashboardIco.png"));
    } else {
      $("#adminTeachers #dashboard #item1").attr("src", require("../assets/ico/DashboardIcoW.png"));
    }
  });
  $("#adminTeachers #courses").hover(function () {
    if ($("#adminTeachers #courses #item2").attr("src") === require("../assets/ico/SchoolW.png")) {
      $("#adminTeachers #courses #item2").attr("src", require("../assets/ico/School.png"));
    } else {
      $("#adminTeachers #courses #item2").attr("src", require("../assets/ico/SchoolW.png"));
    }
  });
  $("#adminTeachers #schedule").hover(function () {
    if ($("#adminTeachers #schedule #item3").attr("src") === require("../assets/ico/ScheduleW.png")) {
      $("#adminTeachers #schedule #item3").attr("src", require("../assets/ico/Schedule.png"));
    } else {
      $("#adminTeachers #schedule #item3").attr("src", require("../assets/ico/ScheduleW.png"));
    }
  });
  $("#adminTeachers #students").hover(function () {
    if ($("#adminTeachers #students #item5").attr("src") === require("../assets/ico/peopleW.png")) {
      $("#adminTeachers #students #item5").attr("src", require("../assets/ico/people.png"));
    } else {
      $("#adminTeachers #students #item5").attr("src", require("../assets/ico/peopleW.png"));
    }
  });
  $("#adminTeachers #quiz").hover(function () {
    if ($("#adminTeachers #quiz #item6").attr("src") === require("../assets/ico/QuizW.png")) {
      $("#adminTeachers #quiz #item6").attr("src", require("../assets/ico/Quiz.png"));
    } else {
      $("#adminTeachers #quiz #item6").attr("src", require("../assets/ico/QuizW.png"));
    }
  });

  //Page Admin Students
  $("#adminStudent #dashboard").hover(function () {
    if ($("#adminStudent #dashboard #item1").attr("src") === require("../assets/ico/DashboardIcoW.png")) {
      $("#adminStudent #dashboard #item1").attr("src", require("../assets/ico/DashboardIco.png"));
    } else {
      $("#adminStudent #dashboard #item1").attr("src", require("../assets/ico/DashboardIcoW.png"));
    }
  });
  $("#adminStudent #courses").hover(function () {
    if ($("#adminStudent #courses #item2").attr("src") === require("../assets/ico/SchoolW.png")) {
      $("#adminStudent #courses #item2").attr("src", require("../assets/ico/School.png"));
    } else {
      $("#adminStudent #courses #item2").attr("src", require("../assets/ico/SchoolW.png"));
    }
  });
  $("#adminStudent #schedule").hover(function () {
    if ($("#adminStudent #schedule #item3").attr("src") === require("../assets/ico/ScheduleW.png")) {
      $("#adminStudent #schedule #item3").attr("src", require("../assets/ico/Schedule.png"));
    } else {
      $("#adminStudent #schedule #item3").attr("src", require("../assets/ico/ScheduleW.png"));
    }
  });
  $("#adminStudent #teachers").hover(function () {
    if ($("#adminStudent #teachers #item4").attr("src") === require("../assets/ico/peopleW.png")) {
      $("#adminStudent #teachers #item4").attr("src", require("../assets/ico/people.png"));
    } else {
      $("#adminStudent #teachers #item4").attr("src", require("../assets/ico/peopleW.png"));
    }
  });
  $("#adminStudent #quiz").hover(function () {
    if ($("#adminStudent #quiz #item6").attr("src") === require("../assets/ico/QuizW.png")) {
      $("#adminStudent #quiz #item6").attr("src", require("../assets/ico/Quiz.png"));
    } else {
      $("#adminStudent #quiz #item6").attr("src", require("../assets/ico/QuizW.png"));
    }
  });
};

export default changeIconMenu;
