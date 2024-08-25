
function maleMarriageEligibility(gender,age,boyName) {
    var result = (gender == "male" && age >= 21)
    ? `Hey ${boyName} you are Eligible For Marriage`:`Hey ${boyName} You Are Not Eligible For Marriage`;
    return result;
};
var mesaage = maleMarriageEligibility("male",25,"Billgates");
console.log(mesaage);
var mesaage = maleMarriageEligibility("male",17,"Stew Jobs");
console.log(mesaage);


function femaleMarriageEligibility(gender,age,girlName) {
    var result = (gender == "female" && age >= 18)
    ? `Hey ${girlName} you are Eligible For Marriage`:`Hey ${girlName} You Are Not Eligible For Marriage`;
    return result;
};
var mesaage = femaleMarriageEligibility("female",16,"Jenifer");
console.log(mesaage);
var mesaage = femaleMarriageEligibility("female",27,"malinda gate");
console.log(mesaage);