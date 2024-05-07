$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 500) {
      $("header").addClass("fixed-header");
    } else {
      $("header").removeClass("fixed-header");
    }
  });
});

$(window).on("load", function () {
  $(".parking .car").addClass("active");

  setTimeout(function () {
    $(".parking .road").addClass("active");
  }, 1500);
});
