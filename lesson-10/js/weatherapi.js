const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=Imperial&appid=b0f8553cf7734d56c5b1f0112382bbb7';

apiFetch(url)

async function paiFectch(apiURL) {
    try {
        const response = await fetch(apiURL);
        if(response.ok) {
            const data = await response.json()
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(weatherData) {
    currentTemp.innerHTML = weatherData.main.temp.tofixed(1);
    
    const imagesrc = 'https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png';
    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', imagesrc);
    captionDesc.innerHTML = desc;
}