
 var str = "    Hey you are doing good, keep it up    ";
 console.log(`Orignal str is : ${str}`);

  var TotalLen = str.length;
  console.log(`Total Length is : ${TotalLen}`);

  var str1 = "    Hey you are doing good, keep it up    ";
  console.log(`Length before trim is: ${str1.length}`);
  var str = str1.trim();
  console.log(`Length after trim is: ${str.length}`)

  
  var text = str.charAt(0);
  console.log(`Char at index 1 is: ${text}`);
  var text1 = str.charAt(33);
  console.log(`char at index last is : ${text1}`);

  var word = str1.trim();
  var result = word.split(" ");
  console.log(`Total No Word Count is: ${result.length}`)

    


