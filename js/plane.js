// // script.js
//
// //plane
//
//     var Oblock = document.getElementsByClassName('block')
//     var Omask = document.getElementsByClassName('mask')[0]
//     var city = document.getElementsByClassName('city')[0]
//     var Obox = document.getElementsByClassName('box')[0]
//     var Oicon = document.getElementsByClassName('icon')[0]
//     var Oimg = document.getElementsByTagName('img')[0]
//     var clone = document.getElementsByClassName('clone')[0]
//     var video = document.getElementById('vio')
//     Obox.onclick = function(){
//     move()
//     }
//     function move(){
//         for(var i = 0; i<4; i++){
//             if(Oimg.getBoundingClientRect().left<Oblock[i].getBoundingClientRect().left){
//                 Oimg.style.left = Oblock[i].getBoundingClientRect().left + 'px'
//                 Oimg.style.top =Oblock[i].getBoundingClientRect().top+ 'px';
//                 if(i==3){
//                     show()
//                 }else{
//                     play()
//                 }
//                 return
//             }
//         }
//     }
//
//     //city
//     function show(){
//        setTimeout(function(){
//          Oicon.style.display = 'block'
//          city.style.display = 'block'
//        },3000)
//     }
//
//     //video
//    function play(){
//        setTimeout(function(){
//             Omask.style.display = 'block'
//             var frameNumber = 0,
//             playbackConst = 500,
//             setHeight = document.getElementById("set-height"),
//             setmask = document.getElementsByClassName("mask")[0]
//             vid = document.getElementById('v0');
//
//             setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
//             setmask.style.height = Math.floor(vid.duration) * playbackConst + "px";
//
//             window.onscroll = function(){
//                if((Math.floor(vid.duration) * playbackConst) - document.documentElement.scrollTop < 20){
//                 Omask.style.display = 'none'
//                }
//             }
//             function scrollPlay(){
//             var frameNumber  = window.pageYOffset/playbackConst;
//             vid.currentTime  = frameNumber;
//             window.requestAnimationFrame(scrollPlay);
//             }
//
//             window.requestAnimationFrame(scrollPlay);
//        },3000)
//
//     }
//
//     //raindrop
//     // number of drops created.
//     var nbDrop = 858;
//
//     // function to generate a random number range.
//     function randRange( minNum, maxNum) {
//       return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
//     }
//
//     // function to generate drops
//     function createRain() {
//     for( i=1;i<nbDrop;i++) {
//     var dropLeft = randRange(0,1900);
//     var dropTop = randRange(-1000,1400);
//
//     $('.rain').append('<div class="drop" id="drop'+i+'"></div>');
//     $('#drop'+i).css('left',dropLeft);
//     $('#drop'+i).css('top',dropTop);
//     }
//     }
//     // Make it rain
//     createRain();
//
// //  4-musicplayer
// // function clickToPlay() {
// // // var myAudio = document.getElementById("myaudio");
// // // $(myAudio)[0].play();
// // // $("#playbutton").hide();
// // // $("#pausebutton").fadeIn();
// // // }
// // // function clickToPause() {
// // //   var myAudio = document.getElementById("myaudio");
// // //   $(myAudio)[0].pause();
// // //   $("#pausebutton").hide();
// // //   $("#playbutton").fadeIn();
// // // }
