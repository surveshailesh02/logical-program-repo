
console.log("===== step 1 ======")
function show() {
    console.log("Good Morning Shailesh What's up!!!");
    console.log("Hey, Can u Give me some logic to updated Skills ");
}
show();

console.log("===== step 2 ======")
function personalDetails1(firstName) {
    console.log("FirstName is:",firstName);
    
}
personalDetails1("Shailesh");

function personalDetails2(lastName) {
    console.log("LastName is:",lastName);
    
}
personalDetails2("Surve");

function personalDetails3(collageName) {
    console.log("CollageName is:",collageName);
    
}
personalDetails3("R.F.Naik");

console.log("===== step 3 ======")
function addThreeValues(num1,num2,num3) {
    result = num1+num2+num3;
    console.log(result);
    
}
addThreeValues(10.23,600,40);
addThreeValues("Hello","Good","Morning");

console.log("===== step 4 ======")
function stringBasics() {
    var myDreamCompany = "Google";
    console.log(`My Dream Company is :${myDreamCompany}`);
    
}
stringBasics();

console.log("===== step 5 ======")
function stringBasics(hobby1,hobby2,hobby3) {
    var hobby1 ="drawing";
    var hobby2= "Riding Bike";
    var hobby3 = "Cricket";

    console.log(`hobby1 is:${hobby1} hobby2 is:${hobby2} hobby3 is:${hobby3}`);
    console.log(`total Character is : ${hobby1.length + hobby2.length + hobby3.length}`);
    
}
stringBasics()