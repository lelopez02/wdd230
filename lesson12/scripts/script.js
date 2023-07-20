// Giving function to the hamburger button
const hamButton = document.querySelector("#hamButton");
const nav = document.querySelector("nav ul");

hamButton.addEventListener("click", toggleNav);

function toggleNav() {
    nav.classList.toggle("active");
}


// add copyright year to footer

const copyright = document.querySelector("#copyright");

const currentYear = new Date().toLocaleString("en-US", {year: "numeric"});

copyright.innerHTML = `&copy;${currentYear} Bountiful Foods`

