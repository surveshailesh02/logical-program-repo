console.log(
  "============ WAP To Find Length or Total No. Character =============="
);
var str = "Hello, World!";
console.log(`Given Str is : ${str}`);
console.log(`The length of str is : ${str.length}`);

var array1 = str.split("");
console.log(`The Character Of Str is : ${array1}`);

var str1 = "JavaScript is the language of Internet";
console.log(`Given str is :${str1}`);
console.log(`The Length of str is : ${str1.length}`);

var array2 = str1.split("");
console.log(`The Chracter Of Str is :${array2}`);

console.log(
  "============ WAP To Find Last Character using length property =============="
);
var str1 = "Hey, my friend, programming Language";
console.log(`Given Str is : ${str1}`);

var array3 = str.slice(28, 36).charAt("7");
console.log(`The Last Chracter Of Array is : ${array3}`);

var str2 = "I am learning logical programs";
console.log(`Given Str is : ${str2}`);

const len = str2.length;
console.log(`The Last Character Of Given String Is : ${str2[len - 1]}`);

var str3 = "Angular";
console.log(`Given Str is : ${str3}`);

const len1 = str3.length;
console.log(`The Last Character Of Given String Is : ${str3[len1 - 1]}`);

console.log(
  "============ WAP To Find First Character using length property =============="
);
var str4 = "React";
console.log(`The Given Str is : ${str4}`);

var len2 = str4.charAt();
console.log(`The 1st Character is : ${len2}`);

var str5 = "Elon Musk";
console.log(`The Given Str is : ${str5}`);

var len3 = str5.charAt();
console.log(`The 1st Character is : ${len3}`);

var str6 = "Apple founder is Stew job";
console.log(`The Given Str is : ${str6}`);

var len4 = str6.charAt();
console.log(`The 1st Chracter is : ${len4}`);

console.log(
  "============ WAP To Find function capitalizeword( ) =============="
);
const capitalize = function (sentence) {
  let str5 = sentence.split(" ");
  for (let index = 0; index < str5.length; index++) {
    str5[index] = str5[index][0].toUpperCase() + str5[index].substring(1);
  }
  return str5.join(" ");
};
console.log(capitalize("language of internet"));
console.log(capitalize("Elon musk - The tycoon of decade"));
console.log(capitalize("my life my rule"));
console.log(capitalize("logical programming question SET"));

console.log(
    "============ WAP To Find str is 'UI' OR Not =============="
  );
  const sentence = function (sentence) {
    if (sentence = "UI" && sentence !="UI") {
      console.log("true");
    }else(
      console.log("false")
    )
  };
  sentence("React - UI Devloper");
  sentence("UI Devloper");
  sentence("Front end and backend technologies");
  sentence("MEAN or MERN - UI Devloper");

  console.log(
    "============ WAP To Find split str into Array of substrings =============="
  );
  var str6 = "apple,orange.banana";
  var array4 = str6.split(" ");
  console.log(array4);

  var str7 = "stew,Bill,Jenny,Elon";
  var array5 = str7.split(" ");
  console.log(array5);

  var str8 = "Rupees,Dollar,Krone,pound,Dinar ";
  var array6 = str8.split(" ");
  console.log(array6);

  console.log(
    "============ WAP To Find Reverse Str =============="
  );
  const str9 = "Software";
  const array7 = str9.split("").reverse().concat("");
  console.log(array7);
  
  const str10 = "UI Devloper";
  const array8 = str10.split("").reverse().concat("");
  console.log(array8);
  
  const str11 = "Web Devloper";
  const array9 = str11.split("").reverse().concat("");
  console.log(array9);

  const str12 = "Billion Dollar";
  const array10 = str12.split("").reverse().concat("");
  console.log(array10);

  const str13 = "Java";
  const array11 = str13.split("").reverse().concat("");
  console.log(array11);
  
  console.log(
    "============ WAP To Find Character 'a' =============="
  );
  var word = "JavaScript";
  var counter = 0;
  for (let index = 0; index < word.length; index++) {
    var ch = word.charAt(index)
    if (ch == "a") {
       counter++;     
    }
  }
  console.log(`"The Total No Of CharacterCount 'a' of "JavaScript" is" ${counter}`);
  
  var word = "Do or Die";
  var counter = 0;
  for (let index = 0; index < word.length; index++) {
    var ch = word.charAt(index)
    if (ch == "a") {
      counter++;
    }
  }
  console.log(`"The Total No Of Character Count 'a' of "Do or Die" ${counter}`);
  
  
  var word = "Learn with us, Job with us";
  var counter = 0;
  for (let index = 0; index < word.length; index++) {
    var ch = word.charAt(index)
    if (ch == "a") {
      counter++;
    }
  }
  console.log(`"The Total No Of Character Count 'a' of "Learn with us, Job with us" ${counter}`);

  var word = "Anny, My favorite fruit is Apple";
  var counter = 0;
  for (let index = 0; index < word.length; index++) {
    var ch = word.charAt(index)
    if (ch == "a") {
      counter++;
    }
  }
  console.log(`"The Total No Of Character Count 'a' of "Anny, My favorite fruit is Apple" ${counter}`);

  console.log(
    "============ WAP To Find Count Vowels  =============="
  );
  var str = "JavaScript";
  var Vowels = "aeiou";
  var counter = 0;
  for (let index = 0; index < str.length; index++) {
    var ch = str.charAt(index)
    var chLowerCase = ch.toLocaleLowerCase();
    var chUpperCase = ch.toLocaleUpperCase();
    if (Vowels.includes(chLowerCase || chUpperCase)) {
      counter++;
    }
  };
  console.log(`The Total Count Of Vowels "JavaScript" is  ${counter}`);

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
  console.log(`The Word "I am UI Developer" Vowels is :${counter}`);

 
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

  console.log(
    "============ WAP To Find Count Words  =============="
  );
  function wordcount(sentence) {
    var result = sentence.split("");
    return(result.length)
  };
  const word1 = wordcount("JavaScript The language of Internet");
  console.log(`The Word Count of "JavaScript The language of Internet" is : ${word1} `);

  function wordcount(sentence) {
    var result = sentence.split(" ");
    return(result.length);
  };
  const word2 = wordcount("Enhance Your Learning Journey with Exclusive Add-ons");
  console.log(`The Word Count Of "Enhance Your Learning Journey with Exclusive Add-ons" is : ${word2}`);

  function wordcount(sentence) {
    var result = sentence.split(" ");
    return(result.length);
  };
  const word3 = wordcount("Beyond frameworks,Beyond Imagination");
  console.log(`The Word Count Of "Beyond frameworks,Beyond Imagination" is : ${word3}`);
  
  

