// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// ============================================

// function palindrome(str) {
//   var reversedString = str.split('').reverse().join(''); // as we know how to reverse a string.
//   // debugger;
//
//   return str === reversedString;   // checks if string in 'str' is equal to reversed string in 'reversedString'. (Boolean value)
// }
//
// // palindrome('aaaabbbbaaaa');

// =====================================

// everyArrayhelper
// ---------------------

function palindrome(str) {
  debugger;
  return str.split('').every((char, i) => {  //every has two parameters char - to collect the 'str' charactors, and to get the index of the array.
  // debugger;
    return char === str[str.length-i-1];     //so str.length-i-1 means str.length-i states the last charc of array and -1 to decrement at every iteration.
  });                                        //so we compare it to the char we got in every iteration.
}

// palindrome('abcba');

module.exports = palindrome;
