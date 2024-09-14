
const fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_seasonal);

const fruits_seasonal1 = ["Banana","Orange","Apple","Mango","Water Melon"];
const array = fruits_seasonal1.length;
console.log(`The Length of array is : ${array}`);

const element0th = fruits_seasonal[0];
console.log(`The 0th element is : ${element0th}`);

const elementLast = fruits_seasonal[4];
console.log(`The Last element is : ${elementLast}`);

const array1 = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`The given array is : ${array1}`);
array1.unshift("papaya");
console.log(array1);

const array2 = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`The given array is : ${array2}`);
array2.splice(3,1);
console.log(array2);

const array3 = ["Banana","Orange","Apple","Mango","Water Melon"];
array3.push("pineapple");
console.log(array3);

const array4 = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`The given array is : ${array4}`);
const insertElement = array4.splice(4,0,("Dragen fruit"));
console.log(array4);

const array5 = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`The given array is : ${array5}`);
const replace = array5.splice(1,1,("Kiwi"));
console.log(array5);

const array6 = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`The given array is : ${array6}`);
const indexfrom1to4 = array6.splice(4,4);
console.log(array6);

const array7 = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`The given array is : ${array7}`);
const last3element = array7.splice(0,2);
console.log(array7);
