// Responsive ham
const hamButton = document.querySelector('#ham');
const navi = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
  navi.classList.toggle("responsive");
});

// Current date on header
const datefieldUK = document.querySelector("aside");
const datemessage = document.querySelector("p");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", {
  dateStyle: "full"
}).format(now);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
  dateStyle: "full"
}).format(now);

// Current date on footer
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
}

// Copyright on footer
let date = new Date();
document.getElementById("copyrightYear").textContent = date.getFullYear();

// "full" or long, medium, short options
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;