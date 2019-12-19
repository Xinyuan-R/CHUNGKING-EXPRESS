// script.js

// 1-preloadergif

window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
});

// 2-loadingbar
window.addEventListener("load", function () {
    const loader = document.querySelector(".progress-bar-container");
    loader.className += " hidden";
});

// // 3-videoplay
setTimeout(function(){
    document.getElementById("myVid").play();
  }, 100)


// // 4-musicplayer
function clickToPlay() {
var myAudio = document.getElementById("myaudio");
$(myAudio)[0].play();
$("#playbutton").hide();
$("#pausebutton").fadeIn();
}
function clickToPause() {
  var myAudio = document.getElementById("myaudio");
  $(myAudio)[0].pause();
  $("#pausebutton").hide();
  $("#playbutton").fadeIn();
}

// neontext
setTimeout(function(){
    $(".neon-wrapper").fadeIn();
}, 9000)

// 5-textflyin
$(function() {
setTimeout(function() {
$('.fly-in-text').removeClass('hidden');
}, 500);
           });
