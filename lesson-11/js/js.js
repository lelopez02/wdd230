const imagesDataSrc = document.querySelectorAll("img[data-src]");
const daysVisited = document.querySelector(".days-visited");

const today = new Date();
const year = today.getFullYear();
const day = today.getDay();

const timestamp = today.getTime();

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
function selectResponse() {
  const s = document.querySelector("#selected");
  const sel = document.querySelector("#selectbrowser");
  s.style.display = "block";
  s.textContent = sel.value;
}

const setStyles = () => {
  localStorage.setItem("daysVisited", timestamp);
};
document.querySelector(".formatted-time").textContent =
  today.toLocaleDateString("en-UK", options);

const hamburger = document.querySelector(".ham");
const mainnav = document.querySelector(".navigation");

hamburger.addEventListener(
  "click",
  () => {
    mainnav.classList.toggle("responsive");
  },
  false
);

window.onresize = () => {
  if (window.innerWidth > 600) mainnav.classList.remove("responsive");
};

