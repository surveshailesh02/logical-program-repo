
console.log("================== step 1 =======================");
const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
const newarrayNumber = arrayNumbers.map((Element)=>{
    return Element + 10 ;
})
console.log(`Add 10 no Each Element Given New Array Is : ${newarrayNumber}`);

console.log("================== step 2 =======================");
const newarrayNumber1 = arrayNumbers.map((Element)=>{
    return Element * Element * Element ;
})
console.log(`The Cube Of Given Array Element Is: ${newarrayNumber1}`);

console.log("================== step 3 =======================");
const newarrayNumber2 = arrayNumbers.map((Element,index)=>{
    return Element + index;
})
console.log(`The index value adding corresponds element is : ${newarrayNumber2}`);
