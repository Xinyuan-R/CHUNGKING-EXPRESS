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

/* closemenu */
var closebtns = document.getElementsByClassName("close");


// // 3-videoplay
setTimeout(function(){
    document.getElementById("myVid").play();
  }, 5000)

      setTimeout(function(){
          document.getElementsByClassName("neon-wrapper").fadeIn();
      }, 5000)

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
// 5-textflyin
$(function() {

setTimeout(function() {
$('.fly-in-text').removeClass('hidden');
}, 500);
           })();

 $('#videoLink')
.magnificPopup({
  type:'inline',
  midClick: true
             })
