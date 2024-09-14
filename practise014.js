
const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
const array = arrayNumbers.length;
console.log(`The Total element & length of array is :${array}`);

const array1 = arrayNumbers[0];
console.log(`The First element array is : ${array1}`);

const array2 = arrayNumbers.length-0;
console.log(`The Last Element array is : ${array2}`);

console.log("=========== Even No =======");
let arrayNum = [20,31,40,25,23,11,29,9,60,2,11];
for (let index = 0; index < arrayNum.length; index++) {
    const element = arrayNum[index];
    if (index%2==0) {
        console.log(element);
    }
}

console.log("=========== Odd No =======");
let arrayNum1 = [20,31,40,25,23,11,29,9,60,2,11];
for (let index = 0; index < arrayNum1.length; index++) {
    const element = arrayNum1[index];
    if (index % 2 == 1) {
        console.log(element);
    }
}

console.log("=========== Even No Element From Array =======");
let arrayNum2= [20,31,40,25,23,11,29,9,60,2,11];
let sum = 0 
for (let index = 0; index < arrayNum2.length; index++) {
    const element = arrayNum2[index];
    if (index % 2 == 0) {
        sum = sum + element
    }
}
console.log(sum);

console.log("=========== Odd No Element From Array =======");
let arrayNum3= [20,31,40,25,23,11,29,9,60,2,11];
let sum1 = 0 ;
for (let index = 0; index < arrayNum3.length; index++) {
    const element = arrayNum3[index];
    if (index % 2 == 1 ) {
        sum1 = sum1 + element;
    }
}
console.log(sum1);

console.log("=========== Sum Of All Element From Array =======");
  let arrayNum4 = [20,31,40,25,23,11,29,9,60,2,11];
  let sum2 = 0;
  for (let index = 0; index < arrayNum4.length; index++) {
    const element = arrayNum4[index];
    sum2 = sum2 + element;
  }
 console.log(sum2);
 

console.log("=========== No Multiple Of 5 Element From Array=======");
let arrayNum5 = [20,31,40,25,23,11,29,9,60,2,11];
let sum3 = 0 ;
for (const element of arrayNum5) {
    if (element % 5 == 0) {
     console.log(element);
    }
}

console.log("=========== Is 115 Available From Array =======");
let arrayNum6 = [20,31,40,25,23,11,29,9,60,2,11];
let result = arrayNum6.includes(115);
console.log(`Is 115 Available From Array : ${result}`);

console.log("=========== Is 23 Available From Array =======");
let arrayNum7 = [20,31,40,25,23,11,29,9,60,2,11];
let result1 = arrayNum7.includes(23);
console.log(` Is 23 Available From Array : ${result1}`);

console.log("=========== Insert No Index 3  From Array =======");
  const arrayNum8 = [20,31,40,25,23,11,29,9,60,2,11];
  const InsertNumber = arrayNum8.splice(3,0,55,66);
  console.log(arrayNum8);
  
  console.log("=========== Insert No Index 3  From Array =======");
  const arrayNum9 = [20,31,40,25,23,11,29,9,60,2,11];
  const DeletNumber = arrayNum9.splice(4);
  console.log(arrayNum9);
  
