function getWeather() {
    // This function gets the weather forecast for a city name.
  
    var cityName = document.getElementById("cityName").value;
    // This gets the value of the input field with the id "cityName".
  
    if (!cityName) {
      // If the city name is empty, the function displays an error message.
      document.getElementById("weather").innerHTML = "Please enter a city name.";
      return;
    }
