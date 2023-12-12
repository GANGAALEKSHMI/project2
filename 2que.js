function factorial(n) {
    // The factorial of a number is the product of all the numbers from 1 to that number.
    // For example, the factorial of 5 is 1 * 2 * 3 * 4 * 5 = 120.
  
    // Check if the number is negative.
    if (n < 0) {
      return -1;
    }
  
    // Initialize the factorial to 1.
    var factorial = 1;
  
    // Iterate from 1 to the number.
    for (var i = 1; i <= n; i++) {
      // Multiply the factorial by the current number.
      factorial *= i;
    }
  
    // Return the factorial.
    return factorial;
  }
  var result = factorial(5); // Calculate the factorial of 5
console.log("Factorial of 5 is: " + result); // Output: "Factorial of 5 is: 120"
