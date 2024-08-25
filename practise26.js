console.log("=========== iS Anagram ============");

function isAnagram(str1, str2) {
    var a = str1.split("").sort().join("");
    var b = str2.split("").sort().join("");
    console.log(a===b ? "The passed word "+ str1 +" & "+ str2 + " is an Anagram " : "The Passed word "+ str1 + " & "+str2 +" is not an Anagram" );
}
let world = isAnagram("vile","evil");
let word1 = isAnagram("silent","listen");
let word2 = isAnagram("gram","aram");
let word3 = isAnagram("mom","tom");