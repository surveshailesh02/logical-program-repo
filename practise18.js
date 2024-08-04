
 function factorialOfNum(Num) {
    if (Num == null || Num == undefined || Num < 0) {
        console.log(`Invalide Input : ${Num}`);
        return ;
    } else {
        let fact = 1
        for (let index = Num; index >= 1; index--) {
            fact = fact * index;
        }        
        console.log(`The Factorial Num Is : ${fact}`);
    }
 }
 factorialOfNum(5);
 factorialOfNum(3);
 factorialOfNum(null);
 factorialOfNum(8);
 factorialOfNum(undefined);
 factorialOfNum(9);
 factorialOfNum(0);