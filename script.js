function getWeather() {
    // This function gets the weather forecast for a city name.
  
    var cityName = document.getElementById("cityName").value;
    // This gets the value of the input field with the id "cityName".
  
    if (!cityName) {
      // If the city name is empty, the function displays an error message.
      document.getElementById("weather").innerHTML = "Please enter a city name.";
      return;
    }
  
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=665a35ed47396b1878a1a3b9ba8fa8ea";
    // This creates a URL that can be used to get the weather forecast for the city name.
  
    var xhr = new XMLHttpRequest();
    // This creates a new XMLHttpRequest object.
  
    xhr.open("GET", url, true);
    // This opens the XMLHttpRequest object and sets the request method to "GET".
  
    xhr.onload = function() {
      // This function is called when the request is finished.
      if (xhr.status === 200) {
        // If the request was successful, the function parses the JSON response and displays the weather forecast.
        try {
          var weatherData = JSON.parse(xhr.responseText);
          var temperature = Math.floor(weatherData.main.temp - 273.15);
          var weatherDescription = weatherData.weather[0].description;
          var capitalizedWeatherDescription = weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);
          document.getElementById("weather").innerHTML = capitalizedWeatherDescription;
          document.getElementById("temperature").innerHTML = temperature + "°C";
        } catch (error) {
          // If the JSON response could not be parsed, the function displays an error message.
          document.getElementById("weather").innerHTML = "Error parsing weather data.";
        }
      } else {
        // If the request was not successful, the function displays an error message.
        document.getElementById("weather").innerHTML = "Error: " + xhr.statusText;
      }
    };
    xhr.onerror = function() {
      // If there was an error with the network connection, the function displays an error message.
      document.getElementById("weather").innerHTML = "Network error occurred.";
    };
    xhr.send();
    // This sends the request to the API.
  }