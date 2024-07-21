
console.log(`======= ES6 - Logical Programs ========`);
console.log(`======= Step 1 ========`);
console.log(`======= To Print Sum Of Two Numbers ========`);
 function calculateSum(a,b) {
     return a + b;
 };
 var num1 = 5;
 var num2 = 10;
 var sum = calculateSum(num1,num2);
 console.log(" The Sum is :", +sum);

 console.log(`======= Step 2 ========`);
 console.log(`======= To Print Find the Maximum Numbers From Array ========`);
 function findMax(arr) {
    if (arr.length == 0) {
        return null;
    }
    let max = arr[0];
    for (let index = 1; index < arr.length; index++) {
        if (arr[index] > max) {
            max = arr[index];
        }
    }
    return max;
 }
 var numbers = [10,5,20,50,70];
 var maxNumber = findMax(numbers);
 console.log("Maximum numbers is: ", + maxNumber);


 console.log(`======= Step 3 ========`);
 console.log(`======= To Print check string is Palindrome ========`);
  
 console.log(`======= Method : 1 ========`);
  function ispalindrom(str) {
     return str = str.split('').reverse().join('');
  }
  var inputString = 'abcabc';
  if (ispalindrom(inputString)) {
     console.log("The string " + inputString + " is a palindrome ");
  } else {
     console.log("The string " + inputString + " is a palindrome ");
  }

  console.log(`======= Method : 2 ========`);
  function ispalindrom(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return str = str.split('').reverse().join('');
  }
  var inputString = "A man, a plan, a canal, Panama!";
  console.log("Is the string is palindrome? " + ispalindrom(inputString));


  console.log(`======= Step 4 ========`);
  console.log(`======= To Print Reverse the given String ========`);
  function reverseString(str) {
     return str.split('').reverse().join('');

  }
  var inputString = "Hello World!";
  var reversedString = reverseString(inputString);
  console.log("The reverse string is : " + reversedString);


  console.log(`======= Step 5 ========`);
  console.log(`======= To Print new array only even no. ========`);
  function filterEvenNumbers(arr) {
    return arr.filter(function (num) {
        return num % 2 == 0 ;
    })
  }
  var numbers = [1,2,3,4,5,6,7,8,9,10];
  var evenNumbers = filterEvenNumbers(numbers);
  console.log("The even numbers are : " + evenNumbers);


  
  console.log(`======= Step 6 ========`);
  console.log(`======= To Print Find The Factorial Given Number ========`);
  console.log(`======= Method : 1 =====  [ Using Recursion ]    ===`);
  function factorial(n) {
    if (n < 0) {
        return -1;
    }
    if (n == 0 || n == 1) {
        return 1;
    }
    return n * factorial(n-1);
  }
  var Number = 5;
  var result = factorial(Number);
  console.log("The factorial of : " + Number + " is " + result);


  console.log(`======= Method : 2 =====  [ Without Recursion ]    ===`);
  function factorial(n) {
    if (n < 0) {
        return -1 ;
    }
    if (n == 0) {
        return 1 ;
    }
    let result = 1;
    for (let index = 2; index < n; index++) {
             result = result * index
    }
     return result;
  }
  var number = 5;
  var result = factorial(number);
  console.log("The factorial of " + number + " is " + result);

  console.log(`======= Step 7 ========`);
  console.log(`======= To Print Find The given no prime or Not  ========`);
  console.log(`======= Method : 1 ========`);
  function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    if (num == 2) {
        return true;
    }
    if (num % 2 == 0) {
        return false;
    }
    for (let index = 3; index < Math.sqrt(num); index = index + 2) {
        if (num % 2 == 0) {
            return false;
        }
    }
    return true;
  }
  var number = 29;
  if (isPrime(number)) {
    console.log(number + " is a Prime number ");
  }else{
    console.log(number + " is not a Prime number ");
  }

  console.log(`======= Method : 2 ========`);
  function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let index = 2; index < num; index++) {
        if (num % index == 0 ) {
            return false;
        }
    }
    return true;
  }
  var number = 21;
  if (isPrime(number)) {
    console.log(number + " is a prime number ");
  }else{
    console.log(number + " is not a prime number ");
  }

  console.log(`======= Step 8 ========`);
  console.log(`======= To Print Find The Prime Numbers within given range  ========`);
  function findPrimesInRange(start, end) {
    const primes = [];
    for (let num = start; num <= end; num++) {   
        let isPrime = num > 1;
        for (let index = 2; index <= Math.sqrt(num); index++)
            if (num % index == 0) {
                isPrime = false ;
                break;
            }
     }
     if (isPrime) {
        primes.push(number);
     }
     return primes;
     }
     const start = 10;
     const end = 50;
     const primeNumbers = findPrimesInRange (start, end);
     console.log(" prime numbers between " + start + " and " + end + " : " + primeNumbers.join(" , "));


     
  console.log(`======= Step 9 ========`);
  console.log(`======= To Print Find The Fibonacci Series ========`);
  const Num = 6 ;
  let n1 = 0, n2 = 1, nextTerm;
  console.log("Fibonacci Series:");
  console.log(n1);
  console.log(n2);
  nextTerm = n1 + n2 ; 
  while (nextTerm <= Num) {
    console.log(nextTerm);
    n1 = n2;
    n1 = nextTerm;
    nextTerm = n1 + n2;
  }