//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly
var message = "";

$("#play").click(function() {
  var yourNumber = parseInt($("#myNumber").val());
  for (i=1; i<=yourNumber; i++) {
    if (i%15===0) {
      message = "ping-pong";
    } else if (i%5===0) {
      message = "pong";
    } else if (i%3===0) {
      message = "ping";
    } else {
      message = i;
    }
    $("#pingpong").append("<li><strong>" + message + "</strong></li>");
  }

});
