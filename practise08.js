
   var isEvenOrOdd = function (num) {
    if (num % 2 == 0) {
        console.log(`The Given Num ${num} is : "Even" `);
    } else {
        console.log(`The Given Num ${num} is : "Odd" `);
    }
   };
   isEvenOrOdd(45);
   isEvenOrOdd(70);
   isEvenOrOdd(67);
   isEvenOrOdd(98);

   var isEligible =  function (age) {
    if (age >=18) {
        console.log(`The Given Person age ${age} is : "Eligible" `);
    } else {
        console.log(`The Given Person age ${age} is : "Not Eligible"`);
    };
   };  
   isEligible(18);
   isEligible(20);
   isEligible(17);
   isEligible(40);

   var stringLength = function (str) {
    if (str.length >= 10) {
        console.log(`The Given String ${str} character 10 is : "More"`);
    } else {
        console.log(`The Given String ${str} character 10 is : "Not More"`);
    };
   };
    stringLength("JavaScript");

    var stringLength = function (str) {
        if (startWith = "Java") {
            console.log(`The Given Str ${str} does Start With : "Java"`);
        } else {
            console.log(`The Given Str ${str} does not Start with : "Java"`);
        };
    };
    stringLength("JavaScript Language");
    stringLength("programming Language");