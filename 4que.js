// Function to reverse a string
function reverseString(str) {
    // Split the string into an array of characters.
    var characters = str.split('');
  
    // Reverse the order of the characters in the array.
    characters.reverse();
  
    // Join the characters back together into a string.
    return characters.join('');
  }
  
  // Function to check whether a string is a palindrome
  function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters.
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
    // Reverse the string.
    var reversedStr = reverseString(str);
  
    // Check if the reversed string is equal to the original string.
    return str === reversedStr;
  }
  
  // Test the isPalindrome function
  console.log(isPalindrome("malayalam")); // Output: true
console.log(isPalindrome("hello"));   // Output: false