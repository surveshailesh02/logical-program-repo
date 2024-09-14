
console.log ("======== to print total no of vowel include small & capital ========");
console.log ("======== Step 1 ========");

var str = "I am very good IT Developer"
var Vowels = "aeiou";
counter = 0;
for (let index = 0; index < str.length; index++) {
    var ch = str.charAt(index);
    var chLowercase = ch.toLowerCase();
    if (Vowels.includes(chLowercase)) {
        counter ++
    }
}
console.log(counter);

console.log ("======== to print sum of cube from 1 to 5 ========");
console.log("======= Step 2 ========");

function sumOfCube() {
    var sumOfCube = 0;
    for (let index = 1; index <= 5 ; index++) {
        var Cube = index * index * index;
        var sumOfCube = sumOfCube + Cube;
    }
    console.log(sumOfCube);
}

console.log ("======== to print Odd Position Character ========");
console.log("======= Step 3 ========");

var str = "Hard works alwayes pays back";
var str = "Soon I will be UI IT Champ";
var result = "";
function oddPositionedChars() {
    for (let index = 0; index < str.length; index++) {
        var ch = str.charAt(index);
        result = result + ch;
        if (index % 2 == 1 && ch != ' ' ) {
          console.log(ch);
        }
    }
}
oddPositionedChars("Hard works alwayes pays back");
oddPositionedChars("Soon I will be UI IT Champ");
