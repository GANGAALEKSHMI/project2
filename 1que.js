function celsiusToFahrenheit(celsius) {
    // The formula to convert Celsius to Fahrenheit is:
    // Fahrenheit = (Celsius * 9 / 5) + 32
  
    // Calculate the Fahrenheit temperature.
    var fahrenheit = (celsius * 9 / 5) + 32;
  
    // Return the Fahrenheit temperature.
    return fahrenheit;
}
 // Input temperature in Celsius
  var celsiusTemperature = 34; 
  // You can change this value to any Celsius temperature
  
  // Convert Celsius to Fahrenheit
  var fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
  
  // Display the result
  console.log(celsiusTemperature + " degrees Celsius is equal to " + fahrenheitTemperature + " degrees Fahrenheit.");
  