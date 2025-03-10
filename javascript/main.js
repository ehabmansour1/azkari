// ----------------------loader---------
let loader = document.querySelector(".loader");
window.addEventListener("load", function () {
  if (!praytimeSection) {
    loader.style.display = "none";
  }
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
if (title) {
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
    if (time >= 0 && time < 15) {
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
}
//---------------------------- reset button ---------------------
let reset = document.querySelector(".reset");
if (reset) {
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
}
//------------------------------
//----------------------pryerTimes----------------------------------
function convertTime24To12(time) {
  let [hours, minutes] = time.split(":").map((x) => parseInt(x, 10));
  let am_pm = "AM";
  if (hours >= 12) {
    if (hours > 12) {
      hours -= 12;
    }
    am_pm = "PM";
  }
  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  return `${hours}:${minutes} ${am_pm}`;
}
let praytimeSection = document.querySelector(".prayTimeSection");
let praySpans = document.querySelectorAll(".prayTimeSection span.prayTime");
const city = document.querySelector(".city");
const country = document.querySelector(".country");
if (praytimeSection) {
  async function getPrayerTimes() {
    const locationResponse = await fetch("https://ipapi.co/json/");
    const locationData = await locationResponse.json();
    const latitude = locationData.latitude;
    const longitude = locationData.longitude;
    city.innerHTML = locationData.city;
    country.innerHTML = locationData.country_name;
    const prayerTimesResponse = await fetch(
      `https://api.aladhan.com/v1/timingsByCity?city=${
        locationData.city || "cairo"
      }&country=${locationData.country_name || "egypt"}&method=8`
    );
    const prayerTimesData = await prayerTimesResponse.json();
    console.log(prayerTimesData);
    const prayerTimes = prayerTimesData.data.timings;
    return {
      fajr: prayerTimes.Fajr,
      sunrise: prayerTimes.Sunrise,
      dhuhr: prayerTimes.Dhuhr,
      asr: prayerTimes.Asr,
      maghrib: prayerTimes.Maghrib,
      isha: prayerTimes.Isha,
    };
  }
  getPrayerTimes().then((prayerTimes) => {
    // Do something with the prayer times
    for (let i = 0; i < praySpans.length; i++) {
      console.log(prayerTimes);
      console.log();
      praySpans[i].innerHTML = convertTime24To12(
        prayerTimes[Object.keys(prayerTimes)[i]].split(" ")[0]
      );
    }
    loader.style.display = "none";
  });
}
