
   console.log("======  Interview Q. ===========");
   console.log("======== Reverse Str With 1st word as it is otp =============");
   

var name="Welcome Shailesh";
var reversedName = name.split(" ")[1].split("").reverse().join("");
var result = "Welcome " + reversedName;
console.log(result);

var str = "welcome Shailesh";
var result = str.split("").reverse("").join("");
console.log(result);

var message = "hello Good ";
var reverseMessage = message.split(" ")[1].split("").reverse().join("");
var result = "hello" + reverseMessage ;
console.log(result);

var message = "Good Morning Jack";
var reverseMessage = message.split(" ")[2].split("").reverse().join("");
var result = "Good Morning" + reverseMessage;
console.log(result);

