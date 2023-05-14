const hamButton = document.querySelector('#ham');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle("responsive");
});

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
  let date = new Date();
  document.getElementById("#copyrightYear").textContent = date.getFullYear();

  
const datefield = document.querySelector("time");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.textContent = fulldate;
datemessage.innerHTML = `Today is <strong>${fulldate}</strong>. What are you going to do?`;