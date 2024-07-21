
    console.log(`========= Array Logical Programs =========`);
console.log(`======= Step 1 ========`);
console.log(`======= To Print No Element From Array ========`);
let array = [1,2,3,4,5,6];
function printNumberOfElements(arr) {
    console.log(`Number Of Elements In Array:`,arr.length);
}
printNumberOfElements(array);

console.log(`======= Step 2 ========`);
console.log(`======= To Print Sum Of Element From Array ========`);
let array1 = [1,2,3,4,5,6];
function calculateSum(arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum = sum + arr[index];
    }
    return sum
}
console.log("Sum Of All The Items In The Array:", calculateSum(array));

console.log(`======= Step 3 ========`);
console.log(`======= To Print Right Rotate The Elements From Array ========`);
let array3 = [1,2,3,4,5,6];
console.log("Orignal Array :", array3);
function rightRotateArray(arr) {
    if (arr.length == 0) {
        return arr;
    }
    let lastElement = arr.pop();
    arr.unshift(lastElement);
    return arr;
}
let rotatedArray = rightRotateArray(array3);
console.log("Array After Right Rotation",rotatedArray);

console.log(`======= Step 4 ========`);
console.log(`======= To Print Sort The Elements Ascending Order From Array ========`);
function sortArrayAscending(arr) {
    return arr.slice().sort(function (a, b) {
        return a - b ;
    });
}
let array4 = [4,8,5,3,2,7,1,9,3];
console.log("Original Array:", array);

let sortedArray = sortArrayAscending(array4);
console.log("Array After sorting in Ascending Order :", sortedArray);

console.log(`======= Step 5 ========`);
console.log(`======= To Print Sort The Elements Descending Order From Array ========`);
function sortArrayDescending(arr) {
    return arr.slice().sort(function (a, b) {
        return b - a ;
    });
}
let array5 = [4,8,5,3,2,7,1,9,3];
console.log("Orignal Array:", array5);

let sortedArray1 = sortArrayDescending(array5);
console.log("Array after sorting in descending order:", sortedArray1);


console.log(`======= Step 6 ========`);
console.log(`======= To Print Find 3rd Largest No From Array ========`);
function findThirdLargest(arr) {
    if (arr.length < 3) {
        return "Array Doesn't have enough elements";
    }
    arr.sort(function (a, b) {
        return b - a;
    });
    return arr[2];
}
let array6 = [5,4,6,8,3,9,1,4];
console.log("Third Largest No in the Array:", findThirdLargest(array6));

console.log(`======= Step 7 ========`);
console.log(`======= To Print Find 2nd Largest No From Array ========`);
function findSecondLargest(arr) {
    if (arr.length < 2) {
        return "Array Doesn't have enough elements";
    }
    arr.sort(function (a, b) {
        return b - a;
    });
    return arr[1];
}
let array7 = [5,7,1,8,4,9,3,2];
console.log("Second Largest No in the Array:", findSecondLargest(array7));


console.log(`======= Step 8 ========`);
console.log(`======= To Print Find the Largest No From Array ========`);
function findSecondLargest(arr) {
    if (arr.length == 0 ) {
        return "Array is Empty";
    }
    let Largest = arr [0];
    for (let index = 1; index < array.length; index++) {
        if (arr[index] > Largest) {
            Largest = arr[index]
        }
    }
    return Largest;
}
let array8 = [5,8,3,6,9,2,7,4];
console.log("Largest No in the Array:", findSecondLargest(array8));

console.log(`======= Step 9 ========`);
console.log(`======= To Print Find the 2nd Smallest No From Array ========`);
function findSecondSmallest(arr) {
    if (arr.length < 2) {
        return "Array doesn't have enough elements";
    }
    let Smallest = arr[0];
    let secondSmallest = arr[1];
    if (secondSmallest < Smallest) {
        [Smallest, secondSmallest] = [secondSmallest, Smallest];
    }
    for (let index = 2; index < arr.length; index++) {
        if (arr[index] < Smallest) {
            secondSmallest = Smallest;
            Smallest = arr[index];
        }
        else if (arr[index] < secondSmallest && arr[index == Smallest]) {
            secondSmallest = arr[index]
        }
    }
    return secondSmallest
}
let array9 = [5,9,7,3,8,4,1,5,2,];
console.log("Second smallest number in an array :", findSecondSmallest(array9));


console.log(`======= Step 10 ========`);
console.log(`======= To Print Find the Smallest No From Array ========`);
function findSmallestNumber(arr) {
    if (arr.length == 0) {
        return "Array is Empty"
    }
    let smallest = arr[0];
    for (let index = 1; index < arr.length; index++) {
        if (arr[index] < smallest) {
            smallest = arr[index];
        }
    }
    return smallest;
}
let array10 = [4,7,3,6,9,2,8,5,1];
console.log("Smallest number in the array :", findSmallestNumber(array10));


console.log(`======= Step 11 ========`);
console.log(`======= To Print Removed Duplicated Element From Array ========`);
function removeDuplicates(arr) {
    let uniqueArray = [];
    for (let index = 0; index < arr.length; index++) {
        if (uniqueArray.indexOf(arr[index]) == -1) {
            uniqueArray.push(arr[index]);
        }
    }
    return uniqueArray;
}
let arr = [4,6,7,3,4,9,5,3,8,2,6];
console.log("Original array :", array);

let uniqueArray = removeDuplicates(arr);
console.log("Array after removing duplicates:",uniqueArray);


console.log(`======= Step 12 ========`);
console.log(`======= To Print Odd and Even Number From Array ========`);
function printEvenOddNumbers(arr) {
    let oddNumbers = [];
    let evenNumbers = [];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] % 2 ==0) {
            evenNumbers.push(arr[index]);
        } else {
            oddNumbers.push(arr[index]);
        }
    }
    console.log("Even Numbers:", evenNumbers);
    console.log("Odd Numbers:", oddNumbers);
}
let arr1 = [4,6,2,5,8,1,9,3,7];
console.log("Original array :", arr1);
console.log("Even and Odd numbers of an array:");
printEvenOddNumbers(arr1);

console.log(`======= Step 13 ========`);
console.log(`======= To Print Copy All elements From one Array into another Array ========`);

console.log(`======= Method : 1 ( For Loop Operator Methods ) ========`);
let arr2 = [1,2,3,4,5];
let newArray = [];
for (let index = 0; index < arr2.length; index++) {
    newArray.push(array[index]);
}
console.log(newArray);


console.log(`======= Method : 2 ( Slice Operator Methods ) ========`);
let arr3 = [1,2,3,4,5];
let newArray1 = arr3.slice();
console.log(newArray1);


console.log(`======= Method : 3 ( Spread Operator Methods )========`);
let arr4 = [1,2,3,4,5];
let newArray2 = [...arr4];
console.log(newArray2);

console.log(`======= Step 14 ========`);
console.log(`======= To Print Find the frequency of each element in Array ========`);
let arr5 = [1,2,2,3,3,3,4,4,4,4];
let frequency = {};
for (let index = 0; index < arr5.length; index++) {
    let elements = arr5[index];
    if (frequency[elements]) {
        frequency[elements]++;
    } else {
        frequency[elements] = 1;
    }
}
console.log(frequency); 

console.log(`======= Step 15 ========`);
console.log(`======= To Print Find left rotate the elements element in Array ========`);
function leftRotateArray(arr) {
    if (arr.length == 0) {
        return arr;
    }
    let firstElement = arr.shift();
    arr.push(firstElement);
    return arr;
}
let arr6 = [1,2,3,4,5];
console.log("Original arr6 :", arr6);
let rotatedArray1 = leftRotateArray (arr6);
console.log("Array after left rotation:" , rotatedArray1);

console.log(`======= Step 16 ========`);
console.log(`======= To Print Find the duplicate element of an Array  ========`);
console.log(`======= Method : 1 ========`);
function findDuplicates(array) {
    const duplicates = [];
    for (let index = 0; index < array.length; index++) {
        for (let index = 1; index < array.length; index++) {
            if (array [index] == array [index] && !duplicates.includes(array[index])) {
                duplicates.push(array[index]);
            }
        }
        return duplicates    
}
}
const numbers = [2,4,8,5,6,3,2,4,6,6];
const duplicateNumbers = findDuplicates(numbers);
console.log("Duplicate numbers:", duplicateNumbers);

console.log(`======= the duplicate Optimized element of an Array ========`);
console.log(`======= Method : 2 ========`);

function findDuplicatesOptimized(array) {
    const duplicates = [];
    const frequencyMap = {};
    for (let index = 0; index < array.length; index++) {
        const elements = array [index];
        if (frequencyMap[elements]) {
            if (!duplicates.includes(elements)) {
                duplicates.push(elements);
            }
        } else {
            frequencyMap[elements] = true;
        } 
    }
    return duplicates
}
 const numbers1 = [2,4,8,5,6,3,2,4,6,6];
 const duplicateNumbers1 = findDuplicatesOptimized(numbers1);
 console.log("Duplicate Numbers:", duplicateNumbers1);

 console.log(`======= Method : 2 ========`);

 function printDuplicates(arr) {
    let elementCount = {};
    let duplicates = [];
    for (let index = 0; index < array.length; index++) {
        let element = arr[index];
        if (elementCount[element]) {
            elementCount[element]++;
        } else {
            elementCount[element]
        }
        
    }
 }

 console.log(`======= Method : 3 ========`);

 function printDuplicates(arr) {
    let elementCount = {};
    let duplicates = [];
    for (let index = 0; index < arr.length; index++) {
        let element = arr[index];
        if (elementCount[element]) {
            elementCount[element]++;
        } else {
            elementCount[element] =1;
        }
    }
    for (let element in elementCount) {
        if (elementCount[element] > 1) {
            duplicates.push(element);
        }
    }
    if (duplicates.length > 0) {
        console.log("Duplicates elements:", duplicates);
    } else {
        console.log("No Duplicates elements found");
    }
 }
 let arr7 = [2,4,8,5,6,3,2,4,6,6];
 printDuplicates(arr7);

 console.log(`======= Step 17 ========`);
console.log(`======= To Print Find the elements of an Array  ========`);
console.log(`======= Method : 1 => Using For Loop  ========`);

let arr9 = [1,2,3,4,5];
function printArrayElements(arr) {
    for (let index = 0; index < arr.length; index++) {
        console.log(arr[index]);
    }
}
printArrayElements(arr9);

console.log(`======= Method : 2 => Using While Loop  ========`);

let arr10 = [1,2,3,4,5];
function printArrayElementsWhile(arr) {
    let index = 0;
    while (index < arr.length) {
        console.log(arr[index]);
        index++;
    }
}
printArrayElementsWhile(arr10);

console.log(`======= Method : 3 => Using Do While Loop  ========`);

let arr11 = [1,2,3,4,5];
function printArrayElementsDoWhile(arr) {
    let index = 0;
    do {
        console.log(arr[index]);
        index++;
    } while (index < arr.length);
}
printArrayElementsDoWhile(arr11);

console.log(`======= Method : 3 => Using For Each Loop  ========`);

let arr12 = [1,2,3,4,5];
function printArrayElementsForEach(arr) {
    arr.forEach(function (element) {
        console.log(element);
    });
}
printArrayElementsForEach(arr12);

console.log(`======= Step 18 ========`);
console.log(`======= To Print Find the Reverse Order Elements of an Array  ========`);

console.log(`======= Method : 1 => Using While Loop  ========`);
let arr13 = [1,2,3,4,5];
function printArrayElementReverseWhile(arr) {
    let index = arr.length - 1 ;
    while (index >= 0) {
        console.log(arr[index]);
        index -- ;
    }
}
printArrayElementReverseWhile(arr13);

console.log(`======= Method : 2 => Using Do While Loop  ========`);
let arr14 = [1,2,3,4,5];
function printArrayElementReverseDoWhile(arr) {
    let index = arr.length-1;
    if (index < 0) return;
    do {
        console.log(arr[index]);
        index--;
    } while (index>=0);
}
printArrayElementReverseDoWhile(arr14);

console.log(`======= Method : 3 => Using For Loop  ========`);
let arr15 = [1,2,3,4,5,];
function printArrayElementReverseFor(arr) {
    for (let index = arr.length-1; index >= 0 ; index--) {
        console.log(arr[index]);
    }
}printArrayElementReverseFor(arr15);

console.log(`======= Method : 4 => Using For Each Loop  ========`);
let arr16 = [1,2,3,4,5];
function printArrayElementReverseForEach(arr) {
    arr.slice().reverse().forEach(function (element) {
        console.log(element);
    });
}
printArrayElementReverseForEach(arr16);


console.log(`======= Step 19 ========`);
console.log(`======= To Print Find the Even position Elements of an Array  ========`);
let arr17 = [1,6,3,9,4,2,6,3,9];
function printElementsAtEvenPositions(arr) {
    for (let index = 1; index < arr.length; index=index+2) {
          console.log(arr[index]);    
    }
}
printElementsAtEvenPositions(arr17);

console.log(`======= Step 20 ========`);
console.log(`======= To Print Find the Odd position Elements of an Array  ========`);
let arr18 = [1,6,3,9,4,2,6,3,9];
function printElementsAtOddPositions(arr) {
    for (let index = 0; index < arr.length; index=index+2) {
        console.log(arr[index]);
    }
}
printElementsAtOddPositions(arr18);




