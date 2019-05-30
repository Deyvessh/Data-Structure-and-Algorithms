// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9
// =================================


// function reverseInt(n) {
//   var reversed = n.toString().split('').reverse().join('');  //toString to convert int into str.
//
//   if (n < 0) {
//     return parseInt(reversed) * -1;    //returns -1 when (n < 0)
//   }
//   return parseInt(reversed);    //parseInt - convert str to int.
// }


// Simplified
// =========================

function reverseInt(n) {
  var reversed = n.toString().split('').reverse().join('');

  return parseInt(reversed) * Math.sign(n); // math.sign() - if n < 0 = -1 and else n > 0 = +1
}




module.exports = reverseInt;
