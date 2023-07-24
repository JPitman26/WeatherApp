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
  
