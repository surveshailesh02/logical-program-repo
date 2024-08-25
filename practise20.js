console.log("================== step 1 =======================");
const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
arrayNumbers.forEach((element, index) => {
  console.log(`The Array Element is :${element} & The Index is :${index}`);
});

console.log("================== step 2 =======================");
arrayNumbers.forEach((value) => {
  if (value >= 0) {
    console.log(`The Give Array No. is Positive :${value}`);
  }
});

console.log("================== step 3 =======================");
arrayNumbers.forEach((value) => {
  if (value < 0) {
    console.log(`The Given Array No. is Negative :${value}`);
  }
});

console.log("================== step 4 =======================");
arrayNumbers.forEach((value) => {
  if (value % 2 == 0) {
    console.log(`The Given No Of Array is Even :${value}`);
  }
});

console.log("================== step 5 =======================");
arrayNumbers.forEach((value) => {
  if (value % 2 == 1) {
    console.log(`The Given NO Of Array is Odd : ${value}`);
  }
});

console.log("================== step 6 =======================");
let sum = 0;
arrayNumbers.forEach((value) => {
  sum = sum + value;
});
console.log(`The Given Sum Of All Array Element is :${sum}`);

console.log("================== step 7 =======================");
arrayNumbers.forEach((currentvalue, index) => {
  if (index % 2 == 0) {
    console.log(`The Even Index Of Array Element is : ${currentvalue}`);
  }
});
