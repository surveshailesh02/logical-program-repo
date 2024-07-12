
console.log(`======= Step 1========`);
var string = "Hello World!";
console.log(`Given String Is : ${string}`);

var length = string.length;
console.log(`Total Length Of Given String Is :${length}`);

 const array = string.split(``);
 console.log(`Total Character Of Given String Is : ${array}`);

 var string = "JavaScript is the language of Internet";
console.log(`Given String Is : ${string}`);

var length = string.length;
console.log(`Total Length Of Given String Is :${length}`);

 const array1 = string.split(``);
 console.log(`Total Character Of Given String Is : ${array1}`);

 console.log(`======= Step 2========`);
 console.log(`=======  Q.1 ========`);
 var string = "Hey, my friend, Programming Language";
 console.log(`Given String Is :${string}`);

 const array2 = string.slice(28,36).charAt(`7`);
 console.log(`The Last Character Of Given String Is : ${array2}`);

 console.log(`=======  Q.2 ========`);
 var string = "I am learning logical programs";
 console.log(`Given String Is : ${string}`);

 const len = string.length;
 console.log(`The Last Character Of Given String Is : ${string[len-1]}`);

 console.log(`=======  Q.3 ========`);
 var string = "Angular";
 console.log(`Given String Is : ${string}`);

 const len1 = string.length;
 console.log(`The Last Character Of Given String Is : ${string[len1-1]}`);

 console.log(`======= Step 3 ========`);
 console.log(`=======  Q.1 ========`);
 var string = "React";
 console.log(`Given String Is : ${string}`);

 const arr = string.charAt(``);
 console.log(`The First Character Of Given String Is : ${arr}`);

 console.log(`=======  Q.2 ========`);
 var string = "Elon Musk";
 console.log(`Given String Is : ${string}`);

 const arr1 = string.charAt(``);
 console.log(`The First Character Of Given String Is : ${arr1}`);

 console.log(`=======  Q.3 ========`);
 var string = "Apple founder is Stew Job";
 console.log(`Given String Is : ${string}`);

 const arr2 = string.charAt(``);
 console.log(`The First Character Of Given String Is : ${arr2}`);

 console.log(`======= Step 4 ========`);

const capitalized = function (sentence) {
   let str = sentence.split(" ");
   for (let index = 0; index < str.length; index++) {
     str[index]=str[index][0].toUpperCase() + str[index].substring(1);
   }
   return str.join(" ");
}
console.log(capitalized("language of internet"));
console.log(capitalized("Elon musk - The tycoon of decade"));
console.log(capitalized("my life my rule"));
console.log(capitalized("logical programming question SET"));

console.log(`======= Step 5 ========`);
const str = function(sentence){
   if (sentence ="UI" && sentence != "UI" ) {
       console.log("True");
   } else {
       console.log("False");
       
   }
}
str( "React - UI Devloper");
str( "UI Devloper");
str( "Front end and backend technologies");
str( "MEAN or MERN - UI Devloper");

console.log(`======= Step 6 ========`);
var str4 = "apple,orange,banana";
const array3 = str4.split(" ");
console.log(array3);

var str4 = "Stew,Bill,Jenny,Elon";
const array4 = str4.split(" ");
console.log(array4);

var str4 = "Rupees,Dollar,Krone,Pound,Dinar";
const array5 = str4.split(" ");
console.log(array5);
 
console.log(`======= Step 7 ========`);
console.log(`======= Reverse String Existing Method ========`);
console.log(`======= Q.1 ========`);
var str5 = "Software";
const array6 = str5.split("").reverse().concat("");
console.log(array6);

console.log(`======= Q.2 ========`);
var str6 = "UI Devloper";
const array7 = str6.split("").reverse().concat("");
console.log(array7);

console.log(`======= Reverse String Without using Predefined Methods ========`);
var word = "Web Devloper"; 
console.log(word);
var word = "Web Devloper"; 
var result = "";
for (let index = word.length-1; index >=0; index--) {
    var ch = word.charAt(index);
    result = result + ch;
}
console.log(`Reverse the Given string Is : ${result}`);

var word = "Billion Dollar"; 
console.log(word);
var word = "Billion Dollar"; 
var result = "";
for (let index = word.length-1; index >=0; index--) {
    var ch = word.charAt(index);
    result = result + ch;
}
console.log(`Reverse the Given string Is : ${result}`);
  
var word = "Java"; 
console.log(word);
var word = "Java"; 
var result = "";
for (let index = word.length-1; index >=0; index--) {
    var ch = word.charAt(index);
    result = result + ch;
}
console.log(`Reverse the Given string Is : ${result}`);

console.log(`======= Step 8 ========`);
console.log(`======= To Count Character'a' Method ========`);
console.log(`======= Q.1 ========`);
 var word = "JavaScript";
 var counter = 0;
 for (let index = 0; index < word.length; index++) {
    var ch = word.charAt(index);
    if (ch=="a") {
        counter++;
    }
 } 
 console.log(`Total No Of Character 'a' from word "JavaScript" is : ${counter}`);

 console.log(`======= Q.2 ========`);
 var word = "Do or Die";
 var counter = 0;
 for (let index = 0; index < word.length; index++) {
    var ch = word.charAt(index);
    if (ch=="a") {
        counter++;
    }
 } 
 console.log(`Total No Of Character 'a' from word "Do or Die" is : ${counter}`);

 
 console.log(`======= Q.3 ========`);
 var word = "Learn with us,Job with us";
 var counter = 0;
 for (let index = 0; index < word.length; index++) {
    var ch = word.charAt(index);
    if (ch=="a") {
        counter++;
    }
 } 
 console.log(`Total No Of Character 'a' from word "Learn with us,Job with us" is : ${counter}`);

 console.log(`======= Q.4 ========`);
 var word = "Empowering Dreams, Guaranteeing Futures";
 var counter = 0;
 for (let index = 0; index < word.length; index++) {
    var ch = word.charAt(index);
    if (ch=="a") {
        counter++;
    }
 } 
 console.log(`Total No Of Character 'a' from word "Empowering Dreams, Guaranteeing Futures"; is : ${counter}`);

 console.log(`======= Q.5 ========`);
 var word = "Anny, My favorite fruit is Apple";
 var counter = 0;
 for (let index = 0; index < word.length; index++) {
    var ch = word.charAt(index);
    if (ch=="a") {
        counter++;
    }
 } 
 console.log(`Total No Of Character 'a' from word "Anny, My favorite fruit is Apple"; is : ${counter}`);

console.log(`======= Step 9 ========`);
console.log(`======= To Count Vowels Method ========`);
console.log(`======= Q.1 ========`);
 var Str = "JavaScript";
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
 console.log(`The Word "JavaScript" Vowels is :${counter}`);

 console.log(`======= Q.2 ========`);
 var Str = "HTML and CSS";
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
 console.log(`The Word "HTML and CSS" Vowels is :${counter}`);

 console.log(`======= Q.3 ========`);
 var Str = "Language Of Internet";
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

 function wordCount (sentence) {
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
    let reverseStr = str.split("").reverse().join("");
    console.log(`${reverseStr} is a Palindrom`);
    
}
let sentence = "madam" ;
console.log(`${sentence} : is a Palindrom`);

let sentence1 = "banana" ;
console.log(`${sentence1} : is  Not a Palindrom`);

let sentence2 = "radar" ;
console.log(`${sentence2} : is a Palindrom`);

let sentence3 = "civil" ;
console.log(`${sentence3} : is  Not a Palindrom`);

let sentence4 = "noon" ;
console.log(`${sentence4} : is a Palindrom`);

let sentence5 = "starts" ;
console.log(`${sentence5} : is  Not a Palindrom`);

console.log(`======= Step 12 ========`);
console.log(`======= To Anagram ========`);
function isAnagram(str1,str2){
    var a=str1.split("").sort().join("");
    var b=str2.split("").sort().join("");
    console.log(a===b ? "The passed word is "+str1 +" and " + str2 + " which are Anagram " : "The passed word is "+ str1 +" and " + str2 + " which are not Anagram"
 
    );
 
 }
 isAnagram("silent","listen");
 isAnagram("heart","earth");
 isAnagram("debit card","credit card");

 console.log(`======= Step 13 ========`);
 console.log(`======= To Remove Character From Strings ========`);


   function removeChar(str ,charToRemove) {
    const regex = new RegExp(charToRemove, 'g');
    return str.replace(regex, '');
   }
 const pairs = [
    ["Java@Script",'@'],
    ["Softyware", 'y'],
    ["Code mind", ' ']
 ];
 pairs.forEach(pair => {
    const str = pair[0];
    const charToRemove = pair[1];
    const result = removeChar(str, charToRemove);
    console.log(`Original String: "${str}", Removed '${charToRemove}': "${result}"`);
 });


 console.log(`======= Step 14 ========`);
 console.log(`======= To Reverse the Words From Strings ========`);

 function reverseWord(str) {
    const Words = str.split(' ');
    const reverseWords = Words.map(Word =>{
        return Word.split('').reverse().join('');
    });
    return reverseWords.join(' ');
 }
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

    console.log(`After swapping:`);
    console.log(`wordOne: ${wordOne}`);
    console.log(`wordTwo: ${wordTwo}`);
  }

  swapWords();

  console.log(`======= Step 16 ========`);
  console.log(`======= To Count the spaces From Strings ========`);

  function spaceCount(str) {
     let count = 0;
     for (let index = 0; index < str.length; index++){
        if (str[index] = ' ') {
             count++;
        }
     }
     return count;
  }

  const strings = [
      "Revision is the mother of success",
      "JavaScript is the language of internet world"
  ];

  strings.forEach(str =>{
    const count = spaceCount(str);
    console.log(`Number of spaces in "${str}" : ${count}`);
  });

  console.log(`======= Step 17 ========`);
  console.log(`======= To Find The Numeric Digits ========`);

  function digitCount(str) {
   let count = 0;
   for (let index = 0; index < str.length; index++) {
    if (!isNaN(parseInt(str[index]))) {
            count++;
    }
   } 
   return count;
  }
   var string = [ "Codemind2019", "Twenty24", "Bharath1947India" ];

  string.forEach(str =>{
       const count = digitCount(str);
       console.log(`Number of numeric digits in "${str}" : ${count}`);
  })

  console.log(`======= Step 18 ========`);
  console.log(`======= To Count Consonants ========`);
  function consonantsCount(str) {
    const consonantsCount = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    let count = 0;

    for (let index = 0; index < str.length; index++) {
        if (consonantsCount.includes(str[index])) {
            count++;
        }
        
    }
    return count;
  }
     var string = [ "JavaScript", "HTML and CSS", "Language of Internet",
                    "I am UI Developer","Do or Die" ];

    string.forEach(str=>{
        console.log(`Number of consonants in "${str}" : ${consonantsCount(str)} `);
    });