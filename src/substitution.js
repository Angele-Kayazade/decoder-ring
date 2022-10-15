// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length != 26) return false;
  
    let lowercaseInput = input.toLowerCase();
    let inputArray = lowercaseInput.split('');
    let inputAlphabetArray = alphabet.split('');
    let resultArray = [];
    let alphabetRef = 'abcdefghijklmnopqrstuvwxyz';

    
    const uniqueCharacters = inputAlphabetArray.filter((item, index, self) => 
    self.indexOf(item) === index);
    
    if (uniqueCharacters.length != alphabet.length) return false;
  

   const encoding  = () => {

    const encode = (char) => {
      const charIndex = alphabetRef.indexOf(char);
      const letter = alphabet[charIndex];
      resultArray.push(letter);
    }

    inputArray.forEach(char => {
      char == ' ' ? resultArray.push(' ') : resultArray.push(encode(char));
        })

    return resultArray.join('');
   }

   const decoding = () => {

    const decode = (char) => {
      const charIndex = alphabet.indexOf(char);
      const letter = alphabetRef[charIndex];
      resultArray.push(letter);
    }

    inputArray.forEach(char => {
      char == ' ' ? resultArray.push(' ') : resultArray.push(decode(char));
        })

    return resultArray.join('');
   }
    
    
   return encode ? encoding() : decoding();

  }


  substitution("thinkful", "xoxqmcgrukswaflnthdjpzibev");
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
