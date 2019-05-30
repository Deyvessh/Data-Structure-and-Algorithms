// --- Directions
// ------------------
// Given a string, return a new string with the reversed
// order of characters

// --- Examples
// ----------------
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// ================================================

// Solution 1.
// Simple program to strat with -
// -- split();
// -- reverse();
// -- join();
// ---------------

// function reverse(str) {
//   var splitString = str.split('');
//   var reverseArray = splitString.reverse();
//   var joinArray = reverseArray.join('');
//
//   return joinArray;
// }


// Simplified
// ---------------

// function reverse(str) {
//   var splitString = str.split('');
//   splitString.reverse();
//   return splitString.join('');
// }


// More Simplified
// -------------------

// function reverse(str) {
//   return str.split('').reverse().join('');
// }


// =================================================

// Without using reverse() built-in function
// ---------------------------------------------

// function reverse(str) {
//   let reversed = '';  // temp string value
//
//   for (let character of str) {  // character fetched the value in reverse(str) everytime while str contains it.
//     reversed = character + reversed;  // put every character to the first of reversed array.
//   }   // for of syntex
//       // Introduced in ES2015         // step 1 = if str = "hello"
//                                       // character = 'h';
//                                       // reversed = 'h';
//                                       // step 2, character = "e";
//                                       // reversed = ["e","h"]; and so on,
//
//   return reversed;
// }



// =================================================

// using reducer helper
// ---------------------------------------------

// function reverse(str) {
//   return str.split('').reduce((reversed, character) => {  // takes two arguments
//     return character + reversed;              // -- 1. =>
//   }, '');                                     // -- 2. starting initial value of functions = '' (an empty string)
// }


// Simplified
// -----------

// function reverse(str) {
//   return str.split('').reduce((rev, char) => char + rev, '');
// }


// =======================================================

// Debugger
// ----------

function reverse(str) {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
    debugger;                           // Debugger Statement
  }

  return reversed;
}

reverse('hello');                       // Calling the function



// =================================

module.exports = reverse;
