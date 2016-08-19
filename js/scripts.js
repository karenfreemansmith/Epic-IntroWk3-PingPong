//UI-front end logic
function playMiss() {
  new Audio("img/miss.mp3").play();
}
function playPing() {
  new Audio("img/slam1.mp3").play();
}
function playPong() {
  new Audio("img/slam2.mp3").play();
}
function playVolley() {
  new Audio("img/volley.mp3").play();
}
function playAnimation() {
  acorn.style.animation= "volley 3s linear";
  acorn.style.webkitAnimation= "volley 3s linear";
}
function stopAnimation() {
  acorn.style.animation= "";
  acorn.style.webkitAnimation= "";
}

$(document).ready(function() {
  $("form#play").submit(function(event) {
    var soundTimer=0;
    event.preventDefault();
    stopAnimation();
    $("#pingpong").empty();
    $("#pingpong").hide();
    playAnimation();
    playpong(parseInt($("#userNumber").val())).forEach(function(item) {
      if(item==="ping") {
        setTimeout(playPing, soundTimer);
      } else if(item==="pong") {
        setTimeout(playPong, soundTimer);
      } else if(item==="ping-pong") {
        setTimeout(playVolley, soundTimer);
      } else {
        setTimeout(playMiss, soundTimer);
      }
      soundTimer+=500;
      $("#pingpong").append("<p class='"+item+"'>" + item + "</p>").fadeIn(9999);
    });
  });
  $("#go").click(function() {
    playAnimation();
  });
  $("#stop").click(function() {
    stopAnimation();
  });
});


//Backend-business logic
function playpong(userNumber) {
  var message=[];
  if(userNumber<0) {
    for (i=-1; i>=userNumber; i--) {
      if (i%15===0) {
        message.push("ping-pong");
      } else if (i%5===0) {
        message.push("pong");
      } else if (i%3===0) {
        message.push("ping");
      } else {
        message.push(i);
      }
    }
  } else {
    for (i=1; i<=userNumber; i++) {
      if (i%15===0) {
        message.push("ping-pong");
      } else if (i%5===0) {
        message.push("pong");
      } else if (i%3===0) {
        message.push("ping");
      } else {
        message.push(i);
      }
    }
  }
  return message;
 }
