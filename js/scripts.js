$(document).ready(function() {

  $("#cat").click(function() {
    $("#catInfo").toggle();
    $("#yakInfo").hide();
    $("#bearInfo").hide();
  });

  $("#yak").click(function() {
    $("#yakInfo").toggle();
    $("#catInfo").hide();
    $("#bearInfo").hide();
  });

  $("#bear").click(function() {
    $("#bearInfo").toggle();
    $("#yakInfo").hide();
    $("#catInfo").hide();    
  });

});
