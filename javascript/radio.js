let radio = document.querySelector(".radiochannel");
let currentRadio = radio.value;
let play = document.querySelector(".play");
let pause = document.querySelector(".pause");
let audio = document.querySelector("audio");
play.onclick = function () {
  if (radio.value === "egypt") {
    audio.src = "http://stream.radiojar.com/8s5u5tpdtwzuv";
    audio.play();
  } else if (radio.value === "saudi") {
    audio.src =
      "https://n09.radiojar.com/4wqre23fytzuv?rj-ttl=5&rj-tok=AAABgNijR6MAHn6CskS8gCe3JQ";
    audio.play();
  }
};
pause.onclick = function () {
  audio.pause();
};
