
 gradeCalculation = function gradeCalculation (Marks) {
    var typeOf = typeof Marks ;


     // Invalide Operation   
     if ((Marks <=0 || Marks >100 || Marks == undefined || typeOf != "number" )) 
      console.log(`Invalid Marks : ${Marks} `) 
        
    else {
          //   Valid Operation 
          if (Marks >= 90 && Marks) {
            console.log(`Funtastic Marks : ${Marks}, Your Grade Is A+`);
          }
          if (Marks >= 75 && Marks <= 90) {
            console.log(`Good Marks ${Marks}, Your Grade Is B+`);
          }
          if (Marks >= 35 && Marks <= 75) {
            console.log(`Marks Is ${Marks}, Your Grade Is C, Need Improvement`);
          }
      
    }
 };
 gradeCalculation(98)
 gradeCalculation(80)
 gradeCalculation(90)
 gradeCalculation(0)
 gradeCalculation(150)
 gradeCalculation(-7)
 gradeCalculation(35)
 gradeCalculation(29)
 gradeCalculation(64)
 gradeCalculation(49)
 gradeCalculation("91")
 gradeCalculation("Eighty")
 gradeCalculation(undefined)
 gradeCalculation(null)