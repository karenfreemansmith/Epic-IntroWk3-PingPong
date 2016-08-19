$(document).ready(function() {
  $("form#play").submit(function(event) {
    event.preventDefault();
    playpong(parseInt($("#userNumber").val())).forEach(function(item) {
      $("#pingpong").append("<p>" + item + "</p>");
    });
  });
});

function playpong(userNumber) {
  var message=[];
  for (i=1; i<=userNumber; i++) {
  //     if (i%15===0) {
  //       message = "ping-pong";
  //     } else
    if (i%5===0) {
      message.push("pong");
    } else if (i%3===0) {
      message.push("ping");
    } else {
      message.push(i);
    }
  }
  return message;
 }
