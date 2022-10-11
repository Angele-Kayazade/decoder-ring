const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    let result = "";
    let resultArray = [];
    let polybius = [['a','f','l','q','v'],
                    ['b','g','m','r','w'],
                    ['c','h','n','s','x'],
                    ['d','(i/j)','o','t','y'],
                    ['e','k','p','u','z']];
   
  
  let first = 0;
  let second = 0;

    if (encode == false) {
      let inputArray = input.split('');
      let counter = 0;
      let counterWithSpace = 0;
      const loop = ()=>{
          if (inputArray[counterWithSpace] == ' '){
            counterWithSpace++;
            resultArray.push(' ');
          }
          else if (counter % 2 == 0) {
            first = inputArray[counterWithSpace] - 1;
            counter++;
            counterWithSpace++;
            second = -1;
          }
          else {
            second = inputArray[counterWithSpace] - 1;
            counter++;
            counterWithSpace++;
            resultArray.push(polybius[first][second])
          }
        }

      while (inputArray[counterWithSpace]) {
        loop(counter,counterWithSpace);
      }
    }
    else {
      input = input.toLowerCase(); 
      let inputArray = input.split('');
      for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] == 'i' || inputArray[i] == 'j') {
          resultArray.push(4,2);
        }
        else if (inputArray[i] != ' ') {
        loop:  for (let j = 0; j<polybius.length; j++) {
                for (let k = 0; k<polybius[j].length; k++) {
                  if (inputArray[i] == polybius[j][k]) {
                    resultArray.push(j+1,k+1);
                    break loop;
                  }
                }
              }
        }
        else resultArray.push(' ');
      }
    }

    result = resultArray.join('');
    if (second < 0) return false
    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
