console.log(`======= Step 1========`);
var str = "Hello World!";
console.log(`Given str is :${str}`);

var result = str.length;
console.log(`length of str is : ${result}`);

var array = str.split("");
console.log(`total character of given str: ${array}`);

console.log(`======= Step 1.1========`);
var str = "JavaScript is the language of Internet";
console.log(`given str is : ${str}`);

var length = str.length;
console.log(`length of str is : ${length}`);

var array1 = str.split("");
console.log(`total character of given str is : ${array1}`);

console.log(`======= Step 2========`);
console.log(`=======  Q.1 ========`);
var str = "Hey, my friend, Programming Language";
console.log(`given str is : ${str}`);

const array2 = str.slice(28, 36).charAt("7");
console.log(`Last characters of str is : ${array2}`);

console.log(`=======  Q.2 ========`);
var str = "I am learning logical programs";
console.log(`given str is : ${str}`);

var result = str.length;
console.log(`length of str is : ${result}`);

var len = str.length;
console.log(`last characters of str is :${str[len - 1]}`);

console.log(`=======  Q.3 ========`);
var str = "Angular";
console.log(`given str is : ${str}`);

var result = str.length;
console.log(`given str length is : ${result}`);

var len = str.length;
console.log(`Last charactesr os str is :${str[len - 1]}`);

console.log(`======= Step 3 ========`);
console.log(`=======  Q.1 ========`);
var str = "React";
console.log(`given str is :${str}`);

var result = str.length;
console.log(`length of str is : ${result}`);

const arr = str.charAt("");
console.log(`first characters of str is : ${arr}`);

console.log(`=======  Q.2 ========`);
var str = "Elon Musk";
console.log(`given str is : ${str}`);

var result = str.length;
console.log(`length of str is : ${result}`);

var arr1 = str.charAt("");
console.log(`First characters of str is : ${arr1}`);

console.log(`=======  Q.3 ========`);
var str = "Apple founder is Stew Job";
console.log(`given str is : ${str}`);

var arr2 = str.charAt("");
console.log(`First characters of given str is : ${arr2}`);

console.log(`======= Step 4 ========`);
const capitalized = function (sentence) {
  let str = sentence.split(" ");
  for (let index = 0; index < str.length; index++) {
    str[index] = str[index][0].toUpperCase() + str[index].substring(1);
  }
  return str.join(" ");
};
console.log(capitalized("language of internet"));
console.log(capitalized("Elon musk - The tycoon of decade"));
console.log(capitalized("my life my rule"));
console.log(capitalized("logical programming question SET"));

console.log(`======= Step 5 ========`);
const str1 = function (sentence) {
  if ((sentence = "UI" && sentence != "UI")) {
    console.log("true");
  } else {
    console.log("false");
  }
};
str1("React - UI Devloper");
str1("UI Devloper");
str1("Front end and backend technologies");
str1("MEAN or MERN - UI Devloper");

console.log(`======= Step 6 ========`);
var str = "apple,orange,banana";
console.log(`given str is : ${str}`);

var arr2 = str.split(" ");
console.log(arr2);

var str = "Stew,Bill,Jenny,Elon";
console.log(`given str is : ${str}`);

var arr3 = str.split(" ");
console.log(arr3);

var str = "Rupees,Dollar,Krone,Pound,Dinar";
const arr4 = str.split(" ");
console.log(arr4);

console.log(`======= Step 7 ========`);
console.log(`======= Reverse String Existing Method ========`);
console.log(`======= Q.1 ========`);
var str = "Software";
const arr5 = str.split("").reverse().join("");
console.log(arr5);

console.log(`======= Q.2 ========`);
var str = "UI Devloper";
const arr6 = str.split("").reverse().join("");
console.log(arr6);

console.log(`======= Reverse String Without using Predefined Methods ========`);
var word = "Web Devloper";
console.log(word);
var word = "Web Devloper";
var result= "";
for (let index =  word.length; index >= 0; index--) {
    var ch = word.charAt(index);
    result = result + ch
};
console.log(`Reverse the given str is : ${result}`);

var word = "Billion Dollar";
console.log(word);
var word = "Billion Dollar";
var result = "";
for (let  index = word.length-1; index >=0 ; index--) {
  var ch = word.charAt(index);
  var result = result + ch;
};
console.log(`Given Reverse Str is : ${result}`);

var word = "Java Devloper";
console.log(word);
var word = "Java Devloper";
var result = "";
for (let index = word.length-1;index >= 0; index--) {
  var ch = word.charAt(index);
  var result = result + ch ;
};
console.log(`Given Reverse Str is : ${result}`);

console.log(`======= Step 8 ========`);
console.log(`======= To Count Character'a' Method ========`);
console.log(`======= Q.1 ========`);
var word = "JavaScript";
console.log(word);
var counter = 0;
for (let index = 0; index < word.length; index++) {
   var ch = word.charAt(index);
   if (ch == "a") {
     counter ++ ;
     
   };
     
};
console.log(`total no of "a" character is : ${counter}`);

console.log(`======= Q.2 ========`);
var word = "Do or Die";
console.log(word);
var counter = 0;
for (let index = 0; index < word.length; index++) {
  var ch = word.charAt(index);
  if (ch == "a") {
    counter ++ ;
  };
};
console.log(`total no of "a" character is : ${counter}`);

console.log(`======= Q.3 ========`);
var word = "Learn with us,Job with us";
console.log(word);
var counter = 0;
for (let index = 0; index < word.length; index++) {
  var ch = word.charAt(index);
  if (ch == "a") {
    counter++;
  };
};
console.log(`total no of "a" character is : ${counter}`);

console.log(`======= Q.4 ========`);
var word = "Empowering Dreams, Guaranteeing Futures";
console.log(word);
var counter = 0;
for (let index = 0; index < word.length; index++) {
  var ch = word.charAt(index);
  if (ch == "a") {
    counter ++;
  }
}
console.log(`total no of "a" character is : ${counter}`);

console.log(`======= Q.5 ========`);
var word = "Anny, My favorite fruit is Apple";
console.log(word);
var counter = 0;
for (let index = 0; index < word.length; index++) {
  var ch = word.charAt(index);
  if (ch == "a") {
    counter ++;
  }
}
console.log(`total no of "a" character is : ${counter}`);


console.log(`======= Step 9 ========`);
console.log(`======= To Count Vowels Method ========`);
console.log(`======= Q.1 ========`);
var str = "JavaScript";
console.log(word);
var Vowels = "aeiou";
var counter = 0;
for (let index = 0; index < str.length; index++) {
   var ch = str.charAt(index);
   var chLowerCase = ch.toLocaleLowerCase();
   var chUppercase = ch.toLocaleUpperCase();
   if (Vowels.includes(chLowerCase || chUppercase)) {
      counter ++ ;
   }
}
console.log(`Total Vowels of str is : ${counter}`);

console.log(`======= Q.2 ========`);
var str = "HTML and CSS";
console.log(str);
var Vowels = "aeiou";
var counter = 0;
for (let index = 0; index < str.length; index++) {
  var ch = str.charAt(index);
  var chLowerCase = ch.toLocaleLowerCase();
  var chUppercase = ch.toLocaleUpperCase();
  if (Vowels.includes(chLowerCase||chUppercase)) {
    counter ++;
  }
}
console.log(`Total Vowels of str is : ${counter}`);

console.log(`======= Q.3 ========`);
var str = "Language Of Internet";
console.log(str);
var Vowels = "aeiou";
var counter = 0;
for (let index = 0; index < str.length; index++) {
   var ch = str.charAt(index);
   var chLowerCase = ch.toLocaleLowerCase();
   var chUppercase = ch.toLocaleUpperCase();
   if (Vowels.includes(chLowerCase || chUppercase)) {
       counter++;
   }
}
console.log(`The Word "Language Of Internet" Vowels is :${counter}`);

console.log(`======= Q.4 ========`);
var Str = "I am UI Developer";
var Vowels = "aeiou";
var counter = 0;
for (let index = 0; index < Str.length; index++) {
   var ch = Str.charAt(index);
   var chLowerCase = ch.toLocaleLowerCase();
   var chUppercase = ch.toLocaleUpperCase();
   if (Vowels.includes(chLowerCase || chUppercase)) {
       counter++;
   }
}
console.log(`The Word "I am UI Devloper" Vowels is :${counter}`);


console.log(`======= Q.5 ========`);
var Str = "Do or Die";
var Vowels = "aeiou";
var counter = 0;
for (let index = 0; index < Str.length; index++) {
   var ch = Str.charAt(index);
   var chLowerCase = ch.toLocaleLowerCase();
   var chUppercase = ch.toLocaleUpperCase();
   if (Vowels.includes(chLowerCase || chUppercase)) {
       counter++;
   }
}
console.log(`The Word "Do or Die" Vowels is :${counter}`);

console.log(`======= Step 10 ========`);
console.log(`======= To Count Words Method ========`);

  function wordCount(sentence) {
    var result = sentence.split(" ");
    return (result.length);
  };
  const word1 = wordCount("JavaScript The language of Internet")
  console.log(` Q.1 The "JavaScript The language of Internet" Total Number Of Words is : ${word1}`);
  const word2 = wordCount("Enhance Your Learning Journey with Exclusive Add-ons")
  console.log(` Q.2 The "Enhance Your Learning Journey with Exclusive Add-ons" Total Number Of Words is : ${word2}`);
  const word3 = wordCount("Beyond frameworks,Beyond Imagination")
  console.log(` Q.3 The "Beyond frameworks,Beyond Imagination" Total Number Of Words is : ${word3}`);
  const word4 = wordCount("I am passionate software devloper")
  console.log(` Q.4 The "I am passionate software devloper" Total Number Of Words is : ${word4}`);
  

  console.log(`======= Step 11 ========`);
  console.log(`======= To Palindrom ========`);

  function ispalindrom(str) {
    var reversedStr = str.split(" ").reverse().join(" ");
    console.log(`${reversedStr} : is a Palindrom`);
  };
  let sentence = "madam";
  console.log(`Given Str is Palindrom: ${sentence}`);
  
  let sentence1 = "banana";
  console.log(`Given Str is not Palindrom: ${sentence1}`);

  let sentence2 = "radar";
  console.log(`Given str is palindrom: ${sentence2}`);

  let sentence3 = "civil";
  console.log(`Given str is not palindrom: ${sentence3}`);

  let sentence4 = "noon";
  console.log(`Given str is palindrom: ${sentence4}`);

  let sentence5 = "starts";
  console.log(`Given str is not palindrom: ${sentence5}`);

  console.log(`======= Step 12 ========`);
  console.log(`======= To Anagram ========`);
    function isAnagram(str1 , str2) {
      var a = str1.split("").sort().join("");
      var b = str2.split("").sort().join("");
      console.log(a===b ? "The Passed Word is"  +str1 + "and"  +str2+ "Which are anagram" : "The Passed Word is" +str1 + "and" +str2+ "Which are not anagram");

    };
    isAnagram("silent", "listen");
    isAnagram("heart", "earth");
    isAnagram("debit card","credit card");
    
    console.log(`======= Step 13 ========`);
    console.log(`======= To Remove Character From Strings ========`);

    function removeChar(str,charToRemove ) {
      const regex = new RegExp(charToRemove, 'g'); 
      return str.replace(' ');
    };
    const pairs = [
      ["Java@Script",'@'],
      ["Softyware", 'y'],
      ["Code mind", ' ']
    ];
    pairs.forEach(pair =>{
      const str = pair[0];
      const charToRemove = pair[1];
      const result = removeChar(str,charToRemove);
      console.log(`Original String: "${str}", Removed '${charToRemove}': "${result}"`);
 });
   
 console.log(`======= Step 14 ========`);
 console.log(`======= To Reverse the Words From Strings ========`);

 function reverseWord(str) {
  const Words = str.split('');
  const reverseWords = Words.map(Words=>{
    return word.split('').reverse().join('');
  });
   return reverseWords.join('');
 };
 const Strings = [ "Arise! Awake! and stop not until the goal is reached",
  "Learn with us, Job with us" ];

  Strings.forEach(str =>{
    const reversedString = reverseWord(str);
    console.log(`Original String: "${str}"`);
    console.log(`Reversed Words: "${reversedString}"`);
    console.log(' ');
  });

  console.log(`======= Step 15 ========`);
  console.log(`======= To Swapping the Words From Strings ========`);

  function swapWords(params) {
    let wordOne = "Angular";
    let wordTwo = "React";

    [wordOne, wordTwo] = [wordTwo, wordOne];

    console.log(`After Swapping :`);
    console.log(`wordOne: ${wordOne}`);
    console.log(`wordTwo: ${wordTwo}`);
  };
  swapWords();
  
  
   


  