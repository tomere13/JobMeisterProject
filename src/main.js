"use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // asif random pages
  function pic() {
    var images = ["asif1clear.png", "asif2clear.png", "asif3clear.png"];
    // $(".asif").attr("img/", images[Math.floor(Math.random() * images.length)]);
    $(".asifpe").html(
      '<img class="asifke" src="img/' +
        images[Math.floor(Math.random() * images.length)] +
        '">'
    );
  }
  pic();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
    }
  });

  // if (localStorage.getItem("About") !== null) {
  //   $("#RealAbout").html(localStorage.getItem("About"));
  // }
