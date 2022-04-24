const date = new Date()
console.log(date.getFullYear()) 
let year = document.querySelector(".year")
year.textContent = date.getFullYear()

const day = date.getDate()
console.log(day)