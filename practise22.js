
console.log("================== step 1 =======================");
const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];
const newarrayNumber = arrayNumbers.filter((Element)=>{
    if (Element >50 ) {
    console.log(`The Given ArrayNumbers greater Than 50 Is: ${Element}`);
    }
})


console.log("================== step 2 =======================");
const arrayNumbers1 = arrayNumbers.filter((Element)=>{
    if (Element % 2 == 0) {
        console.log(`The Given  Element Is Even : ${Element}`);
    }
})


console.log("================== step 3 =======================");
const arrayNumbers2 = arrayNumbers.filter((Element)=>{
    if (Element % 2 == 1) {
        console.log(`The Given Element Is Odd : ${Element}`);
    }
})


console.log("================== step 4 =======================");
const arrayNumbers3 = arrayNumbers.filter((Element)=>{
    if (Element % 5 == 0) {
        console.log(`The Given Element Is Multiple Of 5 Is : ${Element}`);
    }
})


console.log("================== step 5 =======================");
const arrayNumbers4 = arrayNumbers.filter((Element)=>{
    if (Element >= 20 && Element <= 50) {
        
    }
    return Element >= 20 && Element <= 50;
})
console.log(`The Given No. Of Element Between 20 & 50 Is : ${arrayNumbers4}`);
