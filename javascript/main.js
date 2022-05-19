// ----------------------loader---------
let loader = document.querySelector(".loader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

// --------------------menu-----------------------
let menu = document.getElementById("menu");
let links = document.querySelector(".links");
menu.onclick = function () {
  if (menu.classList.contains("menu-opened")) {
    menu.classList.remove("menu-opened");
    links.style.display = "none";
  } else {
    menu.classList.add("menu-opened");
    links.style.display = "flex";
  }
};
// --------------------Main Click-----------------------
let mainButt = document.querySelector(".main-button");
let zikr = document.querySelector(".zikr");
let counter = document.querySelector(".counter");
let i = 0;

// ------------------------time ------------------------------------
let today = new Date();
let time = today.getHours();
let title = document.querySelector(".title");
let endMessage = document.querySelector(".end-message");
console.log(time);
function titleFunc() {
  if (time >= 3 && time < 15) {
    title.innerHTML = `الآن, أذكار الصباح`;
  } else {
    title.innerHTML = `الآن, أذكار المساء`;
  }
}
titleFunc();
let strokeWidth = 315;
mainButt.onclick = function () {
  zikrTime.style.display = "none";
  counter.classList.add("color-animation");
  setTimeout(() => {
    counter.classList.remove("color-animation");
  }, 300);
  navigator.vibrate(13);
  if (time >= 0 && time < 16) {
    zikr.innerHTML = morning[i];
    strokeWidth = strokeWidth - 315 / 52;
    if (strokeWidth > 0) {
      circle.setAttribute("stroke-dashoffset", strokeWidth);
    }
    counter.innerHTML = i + 1;
    if (i === 50) {
      endMessage.style.display = "flex";
      return;
    } else {
      i++;
      if (i > 0) {
        mainButt.classList.remove("color-animation-infinite");
      }
    }
  } else {
    zikr.innerHTML = evening[i];
    strokeWidth = strokeWidth - 315 / 58;
    if (strokeWidth > 0) {
      circle.setAttribute("stroke-dashoffset", strokeWidth);
    }
    counter.innerHTML = i + 1;
    if (i === 56) {
      endMessage.style.display = "flex";
      return;
    } else {
      i++;
      if (i > 0) {
        mainButt.classList.remove("color-animation-infinite");
      }
    }
  }
};
let exitEndMessage = document.querySelector(".end-message i");
exitEndMessage.onclick = function () {
  endMessage.style.display = "none";
};
//---------------------------- reset button ---------------------
let reset = document.querySelector(".reset");
reset.onclick = function () {
  zikrTime.style.display = "block";
  i = 0;
  mainButt.classList.add("color-animation-infinite");
  zikr.innerHTML = `<p>قال الله تعالى:</p>
  (فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ)
  <span>[البقرة: 152]</span>`;
  counter.innerHTML = i;
  navigator.vibrate(45);
  strokeWidth = 315;
  circle.setAttribute("stroke-dashoffset", strokeWidth);
};
//------------------------------
