let radio = document.querySelector(".radiochannel");
let currentRadio = radio.value;
let play = document.querySelector(".play");
let pause = document.querySelector(".pause");
let audio = document.querySelector("audio");
play.onclick = function () {
  audio.src = "http://stream.radiojar.com/8s5u5tpdtwzuv";
  audio.play();
};
pause.onclick = function () {
  audio.pause();
};
