var greaterNumber = function greaterNumber(num1, num2) {
  var result = num1 >= num2 ? num1 : num2;
  console.log(`The Greater Number of ${num1} and ${num2} is : ${result}`);
};
greaterNumber(10, -10);
greaterNumber(800, 899);

var isEvenOrOddNum = function isEvenOrOddNum(num) {
  var result = num % 2 == 0 ? true : false;
  return result;
};
var returnValue = isEvenOrOddNum(29);
console.log(`The given no 29 is : ${returnValue}`);
var returnValue = isEvenOrOddNum(44);
console.log(`The given no 44 is : ${returnValue}`);
var returnValue = isEvenOrOddNum(0);
console.log(`The given no 0 is : ${returnValue}`);
var returnValue = isEvenOrOddNum(101);
console.log(`The given no 101 is : ${returnValue}`);

function wordLength(str) {
  console.log(
    `The wordLength of ${str} is : ${str.length} and the wordLength is ${
      str.length % 2 == 0 ? "EVEN" : "ODD"
    } `
  );
}
wordLength("JavaScript");
wordLength("devloper");
wordLength("Google");
