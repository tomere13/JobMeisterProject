let msg = false;
let edit = false;
let flag = 0;
let darkflag = 0;
let textflag = 0;


  $("#welcome").show();
  $("#admin_msg").hide();
  $("#editdiv").hide();
  $("#accessMenu").hide();
  $("#reports").hide();
  $("#Confirm").hide();
  $("#NotConfirm").hide();
  $("#deleteusers").hide(); 

  $("#darkBtn").click(function () {
    if (darkflag === 0) {  
      $("#body").addClass("darkMode");
      $("p").removeClass("bg-white");
      $(".buttonadmin").removeClass("btn-outline-dark");
      $(".buttonadmin").addClass("btn-outline-white");
      $(".buttonadmin2").removeClass("btn-outline-dark");
      $(".buttonadmin2").addClass("btn-outline-white");
      $("#editNow").removeClass("btn-outline-dark");
      $("#editNow").addClass("btn-outline-white");
      $("p").removeClass("border-dark");
      $("#body").removeClass("bg-gray-200");
      $("#pagesDark").addClass("text-white");
      $("#adminDark").addClass("text-white");

      darkflag = 1;
    } else {
      $("#body").addClass("bg-gray-200");
      $("#RealAbout").removeClass("bg-white");

      $("p").addClass("bg-white");
      $("p").addClass("border-dark");
      $("#body").removeClass("darkMode");
      $("#pagesDark").removeClass("text-white");
      $("#adminDark").removeClass("text-white");
      $(".buttonadmin").removeClass("btn-outline-white");
      $(".buttonadmin").addClass("btn-outline-dark");
      $(".buttonadmin2").removeClass("btn-outline-white");
      $(".buttonadmin2").addClass("btn-outline-dark");
      $("#editNow").removeClass("btn-outline-white");
      $("#editNow").addClass("btn-outline-dark");
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

  $("#logout").click(function () {
    alert("Logged out successfully");
  });

  $("#reportsBtn").click(function () {
    $("#reports").toggle("drop");
    $("#welcome").hide();
    $("#admin_msg").hide();
    $("#editdiv").hide();
    $("#accessMenu").hide();
    $("#Confirm").hide();
    $("#NotConfirm").hide();
    $("#deleteusers").hide();

    return false;
  });

  $("#msg_btn").click(function () {
    $("#admin_msg").toggle("drop");
    $("#welcome").hide();
    $("#editdiv").hide();
    $("#accessMenu").hide();
    $("#reports").hide();
    $("#Confirm").hide();
    $("#NotConfirm").hide();
    $("#deleteusers").hide();
    return false;
  });

  $("#edit_btn").click(function () {
    $("#editdiv").toggle("drop");
    $("#welcome").hide();
    $("#admin_msg").hide();
    $("#accessMenu").hide();
    $("#reports").hide();
    $("#Confirm").hide();
    $("#NotConfirm").hide();
    $("#deleteusers").hide();
    return false;
  });
  $("#Confirm_btn").click(function () {
    $("#Confirm").toggle("drop");
    $("#welcome").hide();
    $("#admin_msg").hide();
    $("#editdiv").hide();
    $("#accessMenu").hide();
    $("#reports").hide();
    $("#NotConfirm").hide();
    $("#deleteusers").hide();
    return false;
  });
  $("#NotConfirm_btn").click(function () {
    $("#NotConfirm").toggle("drop");
    $("#welcome").hide();
    $("#admin_msg").hide();
    $("#editdiv").hide();
    $("#accessMenu").hide();
    $("#reports").hide();
    $("#Confirm").hide();
    $("#deleteusers").hide();
    return false;
  });
  $("#usersBtn").click(function () {
    $("#deleteusers").toggle("drop");
    $("#welcome").hide();
    $("#admin_msg").hide();
    $("#editdiv").hide();
    $("#accessMenu").hide();
    $("#reports").hide();
    $("#Confirm").hide();
    $("#NotConfirm").hide();
    return false;
  });

  var editB = $("#editNow");

  var NewText =
    "JobMeister הוא פלטפורמת הדרושים הטובה ביותר של ישראל וזאת בזכות מערכת התאמת מועמד למעסיק הטובה ביותר. מטרת האתר היא לעזור למועמדים מכלל תחומי התעסוקה למצוא את העבודה הטובה והמתאימה להם, ובמקביל לעזור למעסיקים למצוא במהירות ויעילות את העובדים הטובים והמתאימים ביותר.";

// editB.click( function() {
//   NewText = $("#Newtext").val();
//   localStorage.setItem("About", NewText);
//   $("#editP").html(NewText);
//   alert("Saved");

//   } );

// var num_msg = localStorage.getItem("num_of_msg");
// for (var index = 0; index < num_msg; index++) {
//   let name = localStorage.getItem("Client " + index + " name");
//   let email = localStorage.getItem("Client " + index + " email");
//   let subject = localStorage.getItem("Client " + index + " subject");
//   let message = localStorage.getItem("Client " + index + " message");
//   $("#admin_msg").append("<strong>Number of message is - </strong>" + (index+1));
//   $("#admin_msg").append("<p> Name: " + name + "<br>" +"Email: " + email + "<br>" + "Subject: " + subject + "<br>" + "Message: " + message + "</p>" );

// };

// var num_ads = localStorage.getItem("num_of_ads");

// $("#reports").append("<strong>Number of messeges is - "+  index +"</strong>");
// $("#reports").append("<strong><p>Number of ads is - "+  num_ads +"</strong></p>");
// // $("#reports").append(" <img src="img/adv.png"/> ");
