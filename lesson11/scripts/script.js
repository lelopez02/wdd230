//responsive ham

const hamButton = document.querySelector('#ham');
const navi = document.querySelector('.navi');


hamButton.addEventListener('click', () => {
  navi.classList.toggle("responsive");
});

//current date on header

const datefieldUK = document.querySelector("aside");
const datemessage = document.querySelector("p");


const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", {
  dateStyle: "full"
}).format(
  now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
  dateStyle: "full"
}).format(now);



//current date on footer
try {
  let options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  const currentDateTime = new Date().toLocaleDateString("en-AR", options) + " " + new Date().toLocaleTimeString();
  document.getElementById("currentdatetime").textContent = currentDateTime;
} catch (e) {
  console.error(e);
};

//copyright on footer
let date = new Date();

document.getElementById("#copyrightYear").textContent = date.getFullYear();


// "full" or long, medium, short options


datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

// last visit.

const msToDays = 86400000; 
const numDays = document.querySelector(".number-days");
const dateLastVisit = window.localStorage.getItem("lastVisit");
const msDateNow = Date.now();
const totalDays = (msDateNow - dateLastVisit) / msToDays;
let numVisits = Number(window.localStorage.getItem("visits-ls"));

localStorage.setItem("visits-ls", numVisits + 1); 
window.localStorage.setItem("lastVisit", msDateNow.toString());

numDays.textContent = totalDays.toFixed(0);