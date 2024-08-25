console.log("========= Step 1 =========");
function greaterNumber(num1,num2) {
    var result = num1 > num2 ? num1 : num2;
    console.log(`The Greater No Of ${num1} & ${num2} is : ${result}`);
}
greaterNumber(10,-10);
greaterNumber(800,899);
greaterNumber(-745,-700);

console.log("========= Step 2 =========");
var isEvenOrOddNum = function isEvenOrOddNum(num) {
    var result = num % 2 == 0 ? true : false ;
    return result ;
}
var returnValue = isEvenOrOddNum(29);
console.log(`The Given no 29 is : ${returnValue}`);

var returnValue = isEvenOrOddNum(44);
console.log(`The Given no 44 is : ${returnValue}`);

var returnValue = isEvenOrOddNum(0);
console.log(`The Given no 0 is : ${returnValue}`);

var returnValue = isEvenOrOddNum(101);
console.log(`The Given no 101 is : ${returnValue}`);

console.log("========= Step 3 =========");
function wordLength(str) {
    console.log(`The WordLength of ${str} is ${str.length} & 
        the wordlength is ${str.length % 2 == 0 ? "Even" : "Odd" }`);

}
wordLength("JavaScript");
wordLength("devloper");
wordLength("Google");


