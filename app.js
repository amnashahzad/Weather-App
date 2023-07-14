function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'YOUR_API_KEY'; // Get your API key from OpenWeatherMap
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `
          <h2>${data.name}</h2>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Weather: ${data.weather[0].description}</p>
        `;
      })
      .catch(error => {
        console.log('Error:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = 'Failed to fetch weather data.';
      });
  }
  