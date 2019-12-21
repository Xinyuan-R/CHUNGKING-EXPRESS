
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


var images = document.getElementById("images");
var text = document.getElementById("text");
var buttonBox = document.getElementById('buttonBox');
var yerdog;



var changeText = function(words) {

text.innerHTML = words.replace();
};

var changeImage = function(img) {
  // images.style.backgroundImage = "url(" + img + ")";
  images.setAttribute("src",img);
};

var changeButtons = function(buttonList) {
  buttonBox.innerHTML = "";
  if(buttonList) {
    for (var i = 0; i < buttonList.length; i++) {
      buttonBox.innerHTML += "<button onClick="+buttonList[i][1]+">" + buttonList[i][0] + "</button>";
    }
  }

};

var advanceTo = function(s) {
  changeImage(s.image)
  changeText(s.text)
  changeButtons(s.buttons)
};


scenario = {}
var scenario = {

  one: {
    image: "media/S10.mp4",
    text: "Somehow everything comes with an expiry date. Swordfish expires. Pineapple  tin  expires. Even cling-film expires. It's a pity you wake up and find yourself surrounded by all those soon-to-expired stuff. You have to get rid of them before everything  go rotten and smelly. Which one do you want to throw away first?",
     buttons: [["Swordfish", "advanceTo(scenario.two)"],["Cling film", "advanceTo(scenario.three)"],["Canned pineapple", "advanceTo(scenario.four)"]]
  },
  two: {
    image: "media/S10.mp4",
    text: "You fed swordfish to your dog. Still , your 10 square meters bedroom piles up with 30 tins of canned pineapple. You decided to ",
    buttons: [["Eat them up tomorrow", "advanceTo(scenario.four)"],["Eat them up now", "advanceTo(scenario.five)"]]
  },
  three: {
    image: "media/S10.mp4",
    text: "You discarded the cling films. Still ,your 10 square meters bedroom piles up with 30 tins of canned pineapple. You decided to",
    buttons: [["Eat them up tomorrow", "advanceTo(scenario.four)"],["Eat them up now", "advanceTo(scenario.five)"]]
  },
 four: {
   image: "media/S4.mp4",
   text: "Of course You  will dispose of all of them, when you are off duty. Now you are on the street chasing a suspect. Wednesday. Crowd street as usual.You bump into someone.Blonde wig, Black sunglasses. A woman in tangerine raincoat.That was the closest you and her ever got. Just 0.01 cm, if you recalled later. ",
   buttons: [["Thank god you did not miss  plain beginning of this story.", "advanceTo(scenario.five)"]]
  },
 five: {
   image: "media/S5.mp4",
 text: "Just like the classic plot in those cloying yet sarcastic melodramas, you started buying canned pineapples from April Fools’ Day , the day she broke up with you. Now you have 30 pineapple tin .",
  buttons: [["…… poor you  ", "advanceTo(scenario.six)"]]
 },
six: {
  image: "media/S6.mp4",
  text: "For 30 days you have not heard a single word from her. No text, email. calls.  Long and arduous suiside by installment. She left without trace. On the thirty first day you began to realize that you may never have a chance to wait for her response.",
 buttons: [["You just can’t wait like this. ", "advanceTo(scenario.seven)"]]
  },
  seven: {
    image: "media/S7.mp4",
  text: "Well, eating is a different thing. canning, chewing and digesting. No need to wait. Instant dopamine without effort. Industrial syrup and artificial cyclamate will save few seconds of your life. Best ritual to end this parody.",
  buttons: [["You devour 30 cans of pineapple tonight.", "advanceTo(scenario.eight)"]]
   },
 eight: {
     image: "media/S8.mp4",
  text: "It is raining outside. Because you eat too much, you decide to ",
 buttons: [["Go for a run. ", "advanceTo(scenario.nine)"],["Go for a drink.  ", "advanceTo(scenario.twelve)"]]
  },
 nine: {
   image: "media/S9.mp4",
  text: "Perfect. Running on a rainy day helps clear the sweat and tear glands. You ran around the playground for 10 laps. You are now bathed in perspiration. You feel free , refreshing,  as if an actor in Les Rois Du Monde.  Damn those pineapple tins, you think . Running is good for health. You then realize.",
  buttons: [["You decide to run everyday.  ", "advanceTo(scenario.ten)"]]
 },
ten: {
  image: "media/city.mp4",
text: "For some reason, you feel that things started to rush since the day you ran. You start rotations, followed by performance reviews，followed by increasing monthly water and electricity rents, followed by new people you meet. The city is spinning. It changes the rhythm of your breathing and the order of your internal organs. ",
buttons: [["You feel renewed.You couldn’t be better. ", "advanceTo(scenario.eleven)"]] },

 eleven: {
  image: "media/S10.mp4",
 text: "Now you barely remembered that hilarious 30 tins of canned pineapple and all the odd thoughts about expiring dates. But If there is anything that you could recall, it must be the truth of jogging. It really brought you peace of mind .",
buttons: [["Start again? ", "advanceTo(scenario.one)"]]

},
twelve: {
   image: "media/S12.mp4",
 text: "Perfect, drinking might... settle stomach? Anyway, You see her drinking in the bar too. That women you bumped into  the other day, with the conspicuous blond wig, black sunglasses, yellow raincoat. She asked for whisky. ",
 buttons: [["You decide to step forward and say hi.  ", "advanceTo(scenario.thirteen)"],["You want to say hi but it is just…….Alright, you decide to go jogging. ", "advanceTo(scenario.nine)"]]
 },
 thirteen: {
   image: "media/S13.mp4",
 text: "Do you like pineapple? You asked. she roll her eyes at you. i am not in the mood for talking. she replied. You keep badgering her with your story of being jilted, your upcoming birthday, 30 tins of canned pineapple, and some disposition about expiring dates. She just sits beside you and drink. She seldom talks. Maybe she is listening.  ",
 buttons: [["And She seems to be drunken. ", "advanceTo(scenario.fourteen)"]] },
fourteen: {
   image: "media/S14.mp4",
 text: "You send her to the room, help her take off her high heels.  you have eaten wayyyyyyyy too much. ",
 buttons: [["you decided to go jogging. ", "advanceTo(scenario.fifteen)"]] },
fifteen: {
   image: "media/S9.mp4",
  text: "It is raining outside. Perfect. Running on a rainy day helps clear the sweat and tear glands. You ran around the playground for 10 laps .You are now bathed in perspiration. You feel free , refreshing, like characters in Les Rois Du Monde. ",
 buttons: [["Damn those pineapple tins, you think. ", "advanceTo(scenario.sixteen)"]]
 },
sixteen: {
  image: "media/S16.mp4",
 text: "Pager suddenly rang. At this stall, you feel  surprised and raring. who can that be?It turn out to be a happy birthday greeting from “ a friend in Room 702” . You know it’s her. blonde wig . black sunglasses.  tangerine raincoat.",
buttons: [["You suddenly want to see her eyes behind the sunglasses.", "advanceTo(scenario.seventeen)"]]},
seventeen: {
   image: "media/city.mp4",
 text: "It is hard to bump into someone again without  name or contact. Three days after your birthday, you start rotations, followed by performance examine., followed by monthly water and electricity rents, followed by new people you meet.The city is rushing. It changes the rhythm of your breathing and the order of your internal organs. ",
 buttons: [["You actually quite like your life now. You feel renewed. ", "advanceTo(scenario.eighteen)"]]
 },
eighteen: {
  image: "media/S10.mp4",
text: "Now you barely remember that hilarious 30 tins of canned pineapple and all the odd thoughts about expiring dates. But If there is anything that you could recall, it was the greeting on your birthday. You still keep it, though Pagers are no longer used.",
buttons: [["Start again? ", "advanceTo(scenario.one)"]]

},
};

advanceTo(scenario.one)
