
   console.log("=========== iS Palindrome ============");
   
function isPalindrome(str) {
    let reverseStr = str.split(" ").reverse().join(" ");
    console.log(`${reverseStr} is a Palindrome`);
}
let world = isPalindrome("Madam");
let num = isPalindrome("141");
let world1 = "Sunday";
console.log(`${world1} is not a Palindrome`);
let world2 = isPalindrome("mom");
let world3 = isPalindrome("listen");
let world4 = isPalindrome("dad");