const apiKey = "50734d1b6619a0191aa86cbbb7fc65a7";
const city = "Carlsbad";

// current weather data
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
  .then(response => response.json())
  .then(data => {
    document.getElementById("temperature").innerText = `Temperature: ${data.main.temp} °C`;
    document.getElementById("description").innerText = `Description: ${data.weather[0].description}`;
    document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
  })
  .catch(error => console.error("Error fetching current weather data:", error));

// 3 day weather
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
  .then(response => response.json())
  .then(data => {
    const forecastData = data.list.slice(0, 6);
    const forecastContainer = document.querySelector(".forecast");
    forecastData.forEach(item => {
      const date = new Date(item.dt * 1000).toLocaleDateString("en-US", { weekday: "short" });
      const temperature = item.main.temp.toFixed(1);
      const description = item.weather[0].description;
      const forecastItem = document.createElement("div");
      forecastItem.classList.add("forecast-item");
      forecastItem.innerHTML = `<p>${date}</p>
                                 <p>${temperature} °C</p>
                                 <p>${description}</p>`;
      forecastContainer.appendChild(forecastItem);
    });
  })
  .catch(error => console.error("Error fetching forecast data:", error));