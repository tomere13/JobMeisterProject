let flag = 0;
let darkflag = 0;
let textflag = 0;

  $("#accessMenu").hide();

  $("#darkBtn").click(function () {
    if (darkflag === 0) {
      $("#navbarCollapse").addClass("darkMode");
      $(".navbar").addClass("darkMode");
      $(".nav-item").addClass("whitetext");
      $(".loginbtn").removeClass("btn-outline-dark");
      $(".loginbtn").addClass("bg-white");
      $("h1").addClass("whitetext");
      $("p").addClass("text-white");
      $("body").addClass("darkMode");
      $("#divDark").removeClass("bg-light");
      $(".card").addClass("bg-dark");
      $(".footer").removeClass("bg-white");
      $("h5").addClass("whitetext");
      darkflag = 1;
      
    } else {
      $("#navbarCollapse").removeClass("darkMode");
      $(".navbar").removeClass("darkMode");
      $(".nav-item").removeClass("whitetext");

      $(".loginbtn").removeClass("bg-white");
      $(".loginbtn").addClass("btn-outline-dark");

      $("h1").removeClass("whitetext"); 
      $("p").removeClass("text-white");
      $("body").removeClass("darkMode");
      $("#divDark").addClass("bg-light");

      $(".card").removeClass("bg-dark");
      $("h5").removeClass("whitetext");
      $(".footer").addClass("bg-white");


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