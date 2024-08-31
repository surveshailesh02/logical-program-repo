
gradeCalculation = function gradeCalculation(Marks) {
    var typeOf = typeof Marks;

    // Invalid operation
    if ((Marks <= 0 || Marks > 100 || Marks == undefined || typeOf != "number" )) {
        console.log(`The Given Marks is Invalid`);
    }
    else{
         //  Valid Operation 
        if (Marks >= 90 && Marks) {
            console.log(`Funtastic marks : ${Marks}, Your grade is A+`);
        }
        if (Marks >= 75 && Marks <= 90) {
            console.log(`Excellent marks ${Marks}, Your grade is A`);
        }
        if (Marks >= 50 && Marks <= 75) {
            console.log(`Good marks ${Marks}, Your grade is B`);
        }
        if (Marks >= 35 && Marks <= 50) {
            console.log(`Marks is ${Marks}, your grade is C, Need improvment`);
        }
    }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation(91);
gradeCalculation("Eighty");
gradeCalculation(undefined);
gradeCalculation(null);