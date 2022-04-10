$(document).ready(function ($) {
  // item 1
  $("#dashboard").mouseover(function () {
    $("#item1").attr("src", "assets/ico/DashboardIcoW.png");
  });
  $("#dashboard").mouseout(function () {
    $("#item1").attr("src", "assets/ico/DashboardIco.png");
  });
  if ($("#dashboard").is(".active")) {
    $("#dashboard").mouseover(function () {
      $("#item1").attr("src", "assets/ico/DashboardIcoW.png");
    });
    $("#dashboard").mouseout(function () {
      $("#item1").attr("src", "assets/ico/DashboardIcoW.png");
    });
    $("#item1").attr("src", "assets/ico/DashboardIcoW.png");
  } else {
    $("#item1").attr("src", "assets/ico/DashboardIco.png");
  }

  // item 2
  $("#courses").mouseover(function () {
    $("#item2").attr("src", "assets/ico/SchoolW.png");
  });
  $("#courses").mouseout(function () {
    $("#item2").attr("src", "assets/ico/School.png");
  });
  if ($("#courses").is(".active")) {
    $("#courses").mouseover(function () {
      $("#item2").attr("src", "assets/ico/SchoolW.png");
    });
    $("#courses").mouseout(function () {
      $("#item2").attr("src", "assets/ico/SchoolW.png");
    });
    $("#item2").attr("src", "assets/ico/SchoolW.png");
  } else {
    $("#item2").attr("src", "assets/ico/School.png");
  }

  // item 3
  $("#schedule").mouseover(function () {
    $("#item3").attr("src", "assets/ico/ScheduleW.png");
  });
  $("#schedule").mouseout(function () {
    $("#item3").attr("src", "assets/ico/Schedule.png");
  });
  if ($("#schedule").is(".active")) {
    $("#schedule").mouseover(function () {
      $("#item3").attr("src", "assets/ico/ScheduleW.png");
    });
    $("#schedule").mouseout(function () {
      $("#item3").attr("src", "assets/ico/ScheduleW.png");
    });
    $("#item3").attr("src", "assets/ico/ScheduleW.png");
  } else {
    $("#item3").attr("src", "assets/ico/Schedule.png");
  }

  // item 4
  $("#teachers").mouseover(function () {
    $("#item4").attr("src", "assets/ico/peopleW.png");
  });
  $("#teachers").mouseout(function () {
    $("#item4").attr("src", "assets/ico/people.png");
  });
  if ($("#teachers").is(".active")) {
    $("#teachers").mouseover(function () {
      $("#item4").attr("src", "assets/ico/peopleW.png");
    });
    $("#teachers").mouseout(function () {
      $("#item4").attr("src", "assets/ico/peopleW.png");
    });
    $("#item4").attr("src", "assets/ico/peopleW.png");
  } else {
    $("#item4").attr("src", "assets/ico/people.png");
  }

  // item 5
  $("#quiz").mouseover(function () {
    $("#item5").attr("src", "assets/ico/QuizW.png");
  });
  $("#quiz").mouseout(function () {
    $("#item5").attr("src", "assets/ico/Quiz.png");
  });
  if ($("#quiz").is(".active")) {
    $("#quiz").mouseover(function () {
      $("#item5").attr("src", "assets/ico/QuizW.png");
    });
    $("#quiz").mouseout(function () {
      $("#item5").attr("src", "assets/ico/QuizW.png");
    });
    $("#item5").attr("src", "assets/ico/QuizW.png");
  } else {
    $("#item5").attr("src", "assets/ico/Quiz.png");
  }

  $(".chat").mouseover(function () {
    $("#iconChat").attr("src", "assets/ico/IconChatFill.png");
  });
  $(".chat").mouseout(function () {
    $("#iconChat").attr("src", "assets/ico/IconChat.png");
  });
  $(".notif").mouseover(function () {
    $("#iconNotif").attr("src", "assets/ico/IconNotifFill.png");
  });
  $(".notif").mouseout(function () {
    $("#iconNotif").attr("src", "assets/ico/IconNotif.png");
  });
});
