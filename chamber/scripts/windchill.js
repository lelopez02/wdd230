//function calcWindChill(t, s) {
    //if (t <= 50 && s > 3){
        //const wind_chill = Math.round(
        //    35.74 + 0.6215 * t - 35.75 * s **0.16 + 0.4275 * t * s ** 0.16);
      //  return wind_chill;
    //} else {
    //    return "N/A";
   // };
 // };
    
 // let s = document.querySelector(".wind-speed").textContent;
  
 // document.querySelector(".wind-chill").textContent = 
 //   "Wind Chill: "+calcWindChill(t, s)+ "°F";
  
 // document.querySelector(".temp").textContent = t+ "°F";
  
 // document.querySelector(".wind-speed").textContent = "Wind Speed: "+s+" MPH";

 const currentTemp = document.querySelector('#current-temp');
 const windSpeedElement = document.querySelector('#wind-speed');
 const feelsLikeTemperatureElement = document.querySelector('#feels-like-temperature');
 const weatherIcon = document.querySelector('#weather-icon');
 const captionDesc = document.querySelector('figcaption');
 
 const url = 'http://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires&appid=50734d1b6619a0191aa86cbbb7fc65a7&units=metric';
 
 async function apiFetch() {
     try {
         const response = await fetch(url);
         if (response.ok) {
             const data = await response.json();
             console.log(data);
             displayResults(data);
         } else {
             throw Error(await response.text());
         }
     } catch (error) {
         console.log(error);
     }
 }
 
 apiFetch();
 
 function calculateFeelsLikeTemperature(temperature, windSpeed) {
     // Formula to calculate "feels like" temperature (Wind Chill Index)
     const feelsLikeTemperature = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
     return feelsLikeTemperature.toFixed(1);
 }
 
 function displayResults(weatherData) {
     const temperature = weatherData.main.temp.toFixed(0);
     const windSpeed = weatherData.wind.speed.toFixed(1);
 
     currentTemp.innerHTML = `<strong>${temperature}</strong>`;
     windSpeedElement.textContent = windSpeed;
     const feelsLikeTemperature = calculateFeelsLikeTemperature(temperature, windSpeed);
     feelsLikeTemperatureElement.textContent = feelsLikeTemperature !== 'NaN' ? feelsLikeTemperature : 'N/A';
 
     const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
     const desc = weatherData.weather[0].description;
     const arr = desc.split(" ");
     for (var i = 0; i < arr.length; i++) {
         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
     }
     const desc2 = arr.join(" ");
 
     weatherIcon.setAttribute('src', iconsrc);
     weatherIcon.setAttribute('alt', desc2);
     captionDesc.textContent = desc2;
 }
  