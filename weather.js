// Get the elements for the city input, search button, and weather information
const cityInput = document.getElementById("city-input");
const searchButton = document.getElementById("search-button");
const weatherInfo = document.getElementById("weather-info");

// Function to fetch weather data using the OpenWeatherMap API
function fetchWeather(city) {
    const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Display the weather information
            weatherInfo.innerHTML = `
                <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather icon">
                <h2>${data.name}</h2>
                <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
                <p>Description: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.error(error);
            weatherInfo.innerHTML = "Error fetching weather data";
        });
}

// Attach event listener to the search button
searchButton.addEventListener("click", () => {
    const city = cityInput.value;
    fetchWeather(city);
});
