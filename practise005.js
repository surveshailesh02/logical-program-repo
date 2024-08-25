  
  console.log("========== Step1 ========");
  function squareOfWordLength(JavaScript) {
    var str = "JavaScript";
    var l1 = str.length;
    console.log(`The length of ${JavaScript} & length is : ${l1}`);
    var result1 = l1 * l1;
    console.log(`The Squre Of ${JavaScript} & Length is : ${result1}`);
    return result;
        
  }
  var result= squareOfWordLength("JavaScript");
  
  var result =  squareOfWordLength("Google Chrome");
  
  var result = squareOfWordLength("Developer Smart");

  console.log("========== Step2 ========");
  function str() {
    var str = "I am Angular Devloper";
    var l1 = str.length;
    console.log(`The Given Str is : ${str} & the length is : ${l1}`);
    var totalWord = str.split(" ").length;
    console.log(`The Total NO Of Word is : ${totalWord}`);
    var result = l1 / totalWord;
    var result1 = l1 * totalWord;
    console.log(`The str length is: ${result} & The Str length is: ${result1}`);
  }
  str();