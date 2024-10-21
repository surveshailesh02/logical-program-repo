
//  Interview Q To Calculate Sum OF Array
 let array1 = [10,20,30,40];
function calculateSum(arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum = sum + arr[index];
    }
    return sum
}
console.log("Sum Of All The Items In The Array:", calculateSum(array1));
 
 
 