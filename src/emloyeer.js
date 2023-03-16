let flag = 0;
let darkflag = 0;
let textflag = 0;
let testDel;

$("#accessMenu").hide();
  $("#darkBtn").click(function () {
    if (darkflag === 0) {
      $("#navbarCollapse").addClass("darkMode");
      $(".navbar").addClass("darkMode");
      $(".nav-item").addClass("whitetext");
      $(".loginbtn").removeClass("btn-outline-dark");
      $(".loginbtn").addClass("bg-white");
      $("h1").addClass("whitetext");
      $("h3").removeClass("text-black");
      $("h3").addClass("whitetext");
      $("h5").addClass("text-white");
      $("p").addClass("text-white");
      $("body").addClass("darkMode");
      $(".row").addClass("darkMode");
      $(".bgdark").removeClass("bg-light");
      $(".bgf").addClass("darkMode");
      $("h2").addClass("whitetext");
      $(".card").addClass("bg-dark");

      darkflag = 1;
    } else {
      $("#navbarCollapse").removeClass("darkMode");
      $(".navbar").removeClass("darkMode");
      $(".nav-item").removeClass("whitetext");
      $(".loginbtn").removeClass("bg-white");
      $(".loginbtn").addClass("btn-outline-dark");
      $("h1").removeClass("whitetext");
      $("h3").removeClass("whitetext");
      $("h3").addClass("text-black");
      $("p").removeClass("text-white");
      $("p").addClass("text-dark");
      $("body").removeClass("darkMode");
      $(".row").removeClass("darkMode");
      $(".bgdark").addClass("bg-light");
      $(".bgf").removeClass("darkMode");
      $(".card").removeClass("bg-dark");
      $("card").addClass("bg-light");
      $("h2").removeClass("whitetext");
      darkflag = 0;
    }
  });

  $("#largeFont").click(function () {
    if (textflag === 0) {
      $("p").addClass("largeFont");
      $("h1").addClass("largerH");
      // $("body").addClass("mediumFont");
      $(".navG").addClass("mediumFont");

      textflag = 1;
    } else {
      $("p").removeClass("largeFont");
      $("h1").removeClass("largerH");
      $("body").removeClass("largeFont");
      $(".navG").removeClass("mediumFont");

      textflag = 0;
    }
  });

  $("#acessability").click(function () {
    if (flag === 0) {
      $("#acessability").addClass("widthAccess");

      flag = 1;
    } else {
      $("#acessability").removeClass("widthAccess");
      flag = 0;
    }

    // $("#accessMenu").toggle("drop");
    return false;
  });

  function changeVariable() {
    testDel = false;
  }
  module.exports = { testDel, changeVariable };