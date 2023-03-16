// class contact{
//     name;
//     email;
//     theme;
//     content;


//     constructor(client_name, client_email, client_theme,client_content){
//         this.name = client_name;
//         this.email = client_email;
//         this.theme = client_theme;
//         this.content = client_content;
//     } 


// };


let flag = 0;
let darkflag = 0;
let textflag = 0;

  $("#accessMenu").hide();


  $("#darkBtn").click(function () {
    if (darkflag === 0) {
      $("#navbarCollapse").addClass("darkMode");
      $(".navbar").addClass("darkMode");
      $(".nav-item").addClass("whitetext");
      $("h1").addClass("whitetext"); 
      $("h4").addClass("whitetext");
      $("body").addClass("darkMode");
      $(".footS").removeClass("bg-light");
     

      darkflag = 1;
    } else {
      $("#navbarCollapse").removeClass("darkMode");
      $(".navbar").removeClass("darkMode");
      $(".nav-item").removeClass("whitetext");
      $("h1").removeClass("whitetext");
      $("h4").removeClass("whitetext");
      $("body").removeClass("darkMode");
      $(".footS").addClass("bg-light");
      

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

    $("#accessMenu").toggle("drop");
    return false;
  });

  
