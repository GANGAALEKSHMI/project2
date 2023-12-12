function reverseString(str) {
    // Split the string into an array of characters.
    var characters = str.split('');
  
    // Reverse the order of the characters in the array.
    characters.reverse();
  
    // Join the characters back together into a string.
    return characters.join('');
  }
  var reversed = reverseString("Who are you?!");
console.log(reversed); // Output: "!dlroW ,olleH"
   