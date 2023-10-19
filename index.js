const { assert } = require("chai")

function isPalindrome(word) {
  let a = word.split("") //=
  let b = word.split("").reverse() //=

  if (a.length != b.length) {
    return false;
  } else {
    let result = false;

    // comparing each element of array 
    for (let i = 0; i < a.length; i++) {

        if (a[i] !== b[i]) {
            return false;
        } else {
            result = true;
        }
    }
    return result;
  }
}

//  isPalindrome('mom') //=

// input a word into this function to check if the word is a palindrome
// the word should be read one direction then read in the oppsoite direction
// return true only IF both directions are the samee

/* 
  Add your pseudocode here
*/

//create an array of the characters of the word (.split by "")
//pass argument through function to separate characters in one direction
// run it through in the oppsite order to check if it matches order

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
