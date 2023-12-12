function findMax(array) {
    // Initialize the maximum element to the first element in the array.
    var max = array[0];
  
    // Iterate through the array.
    for (var i = 1; i < array.length; i++) {
      // If the current element is greater than the maximum element, update the maximum element.
      if (array[i] > max) {
        max = array[i];
      }
    }
  
    // Return the maximum element.
    return max;
  }
  var numbers = [5,8,25,18,21];
  var maxNumber = findMax(numbers);
console.log("The maximum number is: " + maxNumber); // Output: "The maximum number is: 9"
    