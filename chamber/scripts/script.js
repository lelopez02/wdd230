const hamButton = document.querySelector('#ham');
const navigation = document.querySelector('.navigation');
//responsive ham

hamButton.addEventListener('click', () => {
	navigation.classList.toggle("responsive");
});

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

  //current date on header

  const datefieldUK = document.querySelector("aside");
  const datemessage = document.querySelector("p");
  
  
  const now = new Date();
  const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );
  const fulldateUK = new Intl.DateTimeFormat("en-UK", {
    dateStyle: "full"
  }).format(now);
  // "full" or long, medium, short options ... try them
  
  
  datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;
  