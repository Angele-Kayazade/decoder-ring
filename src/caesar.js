// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (shift == 0 || shift > 25 || shift < -25 || shift == undefined) return false;
    let result = "";
    let alphabet = {
      1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "g",
      8: "h", 9: "i", 10: "j", 11: "k", 12: "l", 13: "m", 14: "n",
      15: "o", 16: "p", 17: "q", 18: "r", 19: "s", 20: "t", 21: "u",
      22: "v", 23: "w", 24: "x", 25: "y", 26: "z",
    }
    let parsedInput = input.toLowerCase();
    let inputArray = parsedInput.split("");
    encode == false ? shift *= -1 : shift = shift;

      //for each letter of the message
      for (let i = 0; i<inputArray.length; i++) {
        //each letter of the alphabet
        for (letter in alphabet) {
          if (inputArray[i] == alphabet[letter]) {
            let shifted = Number(letter) + shift;
            try {
              if(alphabet[shifted] == undefined) {throw "undefined"}
              inputArray[i] = alphabet[shifted];
            }
            catch(error) {
              if (shifted > Object.keys(alphabet).length) {
                shifted = shifted - Object.keys(alphabet).length;
              }
              else if (shifted < Object.keys(alphabet).length) {
                shifted = Object.keys(alphabet).length + shifted;
              }
              inputArray[i] = alphabet[shifted];
            }
            break;
          }
        }
      }
      result = inputArray.join("");
      return result;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
