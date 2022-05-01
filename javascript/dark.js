// -------------------dark mode--------------------
let darkButt = document.querySelector(".dark");
let darkButtSpan = document.querySelector(".dark span");
let darkButtI = document.querySelector(".dark i");
let root = document.querySelector(":root");
let prayTime = document.querySelector(".praytime iframe");
let zikrTime = document.querySelector(".time-of-zikr");
let circle = document.querySelector(".main-button circle");
darkButt.onclick = function dark() {
  var body = document.body;
  body.classList.toggle("dark-mode");
  darkButt.classList.toggle("dark-butt");
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("isDarkMode", true);
    darkButtSpan.innerHTML = "الوضع الليلي";
    darkButtI.classList.remove("fa-sun-bright");
    darkButtI.classList.add("fa-moon");
    root.style.setProperty("--border-color", "#222228");
    root.style.setProperty("--main-color", "#b8c2cc");
    prayTime.src =
      "http://prayertimes3.today/embed/?city=170&azan=true&time=false&intro=false&next-prayer=true&remove-link=true&width=100%&lang=ar&color=383252";
  } else {
    localStorage.setItem("isDarkMode", false);
    darkButtSpan.innerHTML = "العادي";
    darkButtI.classList.add("fa-sun-bright");
    darkButtI.classList.remove("fa-moon");
    root.style.setProperty("--border-color", "#e5e7eb");
    root.style.setProperty("--main-color", "#4827d0");
    prayTime.src =
      "http://prayertimes3.today/embed/?city=170&azan=true&time=false&intro=false&next-prayer=true&remove-link=true&width=100%&lang=ar&color=4827d0";
  }
};
if (localStorage.getItem("isDarkMode") === "true") {
  var body = document.body;
  body.classList.toggle("dark-mode");
  darkButt.classList.toggle("dark-butt");
  darkButtSpan.innerHTML = "الوضع الليلي";
  darkButtI.classList.remove("fa-sun-bright");
  darkButtI.classList.add("fa-moon");
  root.style.setProperty("--border-color", "#222228");
  root.style.setProperty("--main-color", "#b8c2cc");
  prayTime.src =
    "http://prayertimes3.today/embed/?city=170&azan=true&time=false&intro=false&next-prayer=true&remove-link=true&width=100%&lang=ar&color=383252";
} else {
  localStorage.setItem("isDarkMode", false);
  darkButtSpan.innerHTML = "العادي";
  darkButtI.classList.add("fa-sun-bright");
  darkButtI.classList.remove("fa-moon");
  root.style.setProperty("--border-color", "#e5e7eb");
  root.style.setProperty("--main-color", "#4827d0");
  prayTime.src =
    "http://prayertimes3.today/embed/?city=170&azan=true&time=false&intro=false&next-prayer=true&remove-link=true&width=100%&lang=ar&color=4827d0";
}
