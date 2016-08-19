$(document).ready(function() {
  $("form#play").submit(function(event) {
    event.preventDefault();
    $("#pingpong").append("<p>" + playpong(parseInt($("#userNumber").val())) + "</p>");
  });
});

function playpong(userNumber) {
 var message="";
 for (i=1; i<=userNumber; i++) {
 //     if (i%15===0) {
 //       message = "ping-pong";
 //     } else if (i%5===0) {
 //       message = "pong";
 //     } else if (i%3===0) {
 //       message = "ping";
 //     } else {
       message = i;
 //     }
    return message;
   }
 }
