
var isEvenOrOdd = function (num) {
    if (num % 2 == 0) {
        console.log(`The Given No ${num} is Even`);
    } else {
        console.log(`The Given No ${num} is Odd`);
    }
}
isEvenOrOdd(45);
isEvenOrOdd(70);
isEvenOrOdd(67);
isEvenOrOdd(98);


var isEligibleVote = function (age) {
    if (age < 18 ==0 ){
        console.log(`The Person Age ${age} Eligible for Vote`);
    }else{
        console.log(`The Person Age ${age} Not Eligible for Vote`);
    }
}
isEligibleVote(18);
isEligibleVote(20);
isEligibleVote(17);
isEligibleVote(40);

var stringLength = function (str) {
    if (startWith = "Java") {
        console.log(`The Given str ${str} does start with : Java`);
    } else {
        console.log(`The Given str ${str} does not start with : Java`);
    }
}
stringLength("Javascript Language");
stringLength("programming Language");