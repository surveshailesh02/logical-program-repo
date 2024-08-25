     // ===== STEP 1 =====//
     var STEP1;
     console.log("===== STEP1 =====");
     function stringHands() {
     var stringHands = "   Hey you are doing good, keep it up     ";
     console.log(`Given string is: ${stringHands}`);

    // ===== STEP 2 =====//
     var STEP2;
     console.log("===== STEP2 =====");

     var totalChar = stringHands.length;
     console.log(`total length is: ${totalChar}`);

    // ===== STEP 3 =====//
     var STEP3;
     console.log("===== STEP3 =====");

     var stringHands = "   Hey you are doing good, keep it up     ";
     console.log(`Length before trim is: ${stringHands.length}`);
     stringHands = stringHands.trim();
     var trimmedLength = stringHands.length;
     console.log(`Length after trim is: ${stringHands.length}`);

     // ===== STEP 4 =====//
     var STEP4;
     console.log("===== STEP4 =====");
    var result = totalChar - trimmedLength;
    console.log(`total number of space remove: ${ result}`);

    // ===== STEP 5 =====//
    var STEP5;
    console.log("===== STEP5 =====");
    var char1 = stringHands.charAt(0);var char2 = stringHands.charAt(34-1);
    var result = char2;
    console.log(`first character after trim index is: ${char1} and last character before trim index is: ${char2}`);

     // ===== STEP 6/7 =====//
     var STEP6;
     console.log("===== STEP6/7=====");
     var stringHands = stringHands.split(" ");
     console.log(`Total no of words : ${stringHands.length}`);

       // ===== STEP 7 =====//
       var STEP7;
       console.log("===== STEP7=====");
       var stringHands = "Hey you are doing good, keep it up";
      console.log(`Index Of Words : ${stringHands.indexOf("good")}`);


       // ===== STEP 8 =====//
       var STEP8;
       console.log("===== STEP8=====");
       var stringHands = "   Hey you are doing good, keep it up     "; 
       var result = stringHands.substring(1,22);
       console.log(`Substring starting from 22 index is : ${result}`);

       // ===== STEP 9 =====//
       var STEP9;
       console.log("===== STEP9=====");
       var stringHands = stringHands.endsWith("up");
       console.log(`The string end with up is : ${stringHands}`);
       console.log(`The string start with is : ${stringHands}`);

        // ===== STEP 10 =====//
        var STEP10;
        console.log("===== STEP10=====");
        var stringHands = "Hey you are doing good, keep it up";
        var stringHands = stringHands.startsWith("Hey");
        console.log(`The string start with hey is : ${stringHands}`);
      }
stringHands();
