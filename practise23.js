
console.log("================== step 1 =======================");
const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45];
arrayRollNumbers.reverse();
console.log(`The Reverse Array Roll No. Is : ${arrayRollNumbers}`);
 

console.log("================== step 2 =======================");
arrayRollNumbers.sort();
console.log(`The Custom Logic Is: ${arrayRollNumbers}`);


console.log("================== step 3 =======================");
arrayRollNumbers.sort((n1,n2)=>{
    if (n1 > n2 ? 1 : -1) {
        console.log(`The Assending Order Of No. Is : ${arrayRollNumbers}`);
    }
})


console.log("================== step 4 =======================");
const arrayRollNumbers1 = [113,45,56,11,32,45,109,799,56,45];
const len = arrayRollNumbers.length
console.log(`The Greatest No Of Given Array Element Is : ${len} `);

console.log("================== step 5 =======================");
const arrayRollNumbers2 = [113,45,56,11,32,45,109,799,56,45];
const len1 = arrayRollNumbers.length-1;
console.log(`The Smallest No Of Given Array Element Is : ${len1}`);

console.log("================== step 6 =======================");
let arrayRollNumber = [113,45,56,11,32,45,109,799,56,45];
arrayRollNumber = [...new Set(arrayRollNumber)];
console.log(`To Remove Duplicate Element from Array Is : ${arrayRollNumber}`);