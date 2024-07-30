
const fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
  console.log(fruits_seasonal);
  
  const fruits_seasonal1 = ["Banana","Orange","Apple","Mango","Water Melon"];
   const array = fruits_seasonal1.length;
   console.log(`The Length Of Array Is : ${array}`);

   const element0th = fruits_seasonal[0];
   console.log(`The First Element Of Array Is : ${element0th}`);

   const elementLast = fruits_seasonal1[4];
   console.log(`The Last Element Of Array Is: ${elementLast}`);

   const array1 = ["Banana","Orange","Apple","Mango","Water Melon"];
   console.log(`The Original array is : ${array1}`);
   array1.unshift("papaya");
   console.log(`Before Add Array is : ${array1}`);

   const array2 = ["Banana","Orange","Apple","Mango","Water Melon"];
   array2.splice(3,1);
   console.log(`Remove Array Element is : ${array2}`);

   const array3 = ["Banana","Orange","Apple","Mango","Water Melon"];
   array3.push("Pineapple");
   console.log(`To Add Last Element Of Array Is : ${array3}`);

   const array4 = ["Banana","Orange","Apple","Mango","Water Melon"];
   console.log(`Original Array Is : ${array4}`);
   const insertElement = array4.splice(4, 0, ("Dragon Fruit"));
   console.log(array4);

   const array5 = ["Banana","Orange","Apple","Mango","Water Melon"];
   console.log(`Original array is : ${array5}`);
   const replace = array5.splice(1, 1, ("Kiwi"));
   console.log(array5);

   const array6 = ["Banana","Orange","Apple","Mango","Water Melon"];
   console.log(`Original array is : ${array6}`);
   const indexfrom1to4 = array6.splice(0, 4);
   console.log(indexfrom1to4);

   const array7 = ["Banana","Orange","Apple","Mango","Water Melon"];
   console.log(`Original Array Is : ${array7}`);
   const last3element = array7.splice(2, 4);
   console.log(last3element);


   if (true) {
     let message = "Hello";
     const PI = 3.1413;
   
    }
    console.log(message);    // Not Allowed Result  let & Const Is Block Scope So That The Result Is Allowed Only  Outside Fun
    console.log(PI);        // Not Allowed Result



    if (true) {
      var message = "Hello";
      var PI = 3.1413;
      console.log(message);  // Var Is Function Scope So That The Result Is Allowed For Outside As Well As Inside Fun
      console.log(PI);
    }
  