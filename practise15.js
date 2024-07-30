
 const Professer ={
    Name : "Robert Bell",
    Age : 35,
    isMarried : true,
    Strength : "Learning Good Things Quickly & Action It For Future Life In Student",
    Department : "Computer Science",
    degrees : {
       engineering : 'CSC', 
       PHD : 'Adv Computing',
       Course : 'Angular & React',
 },
   certificates : ['Hacker Rank Participation','Certicate in IFE course','Certificate in Adv Programming'],
   constnewProperty : TotalExperience = "14 years",
}

 console.log("====== 1 =======");
 console.log(`Professer Name is : ${Professer.Name}`);

 console.log("====== 2 =======");
 console.log(`Professer Age is : ${Professer.Age}`);

 console.log("====== 3 =======");
 console.log(`Professer isMarried is : ${Professer.isMarried}`);

 console.log("====== 4 =======");
 console.log(`Professer Strength is : ${Professer.Strength}`);

 console.log("====== 5 =======");
 console.log(`Professer Department is : ${Professer.Department}`);

 console.log("====== 6 =======");
 Professer.degrees = "JavaScript";
 console.log(`Professer Degrees New Modify Property  is : ${Professer.degrees}`);

 console.log("====== 7 ======="); 
 var certificates = ['Hacker Rank Participation','Certificate in IFE course','Certificate in Adv Programming'];
 const addedCertificates = certificates.splice(2,0,"Oracle Certificates");
 console.log(`One New Certificate Added`, certificates);

 console.log("====== 8 ======="); 
 var len = certificates.length;
 console.log(`The Last Element Of Certicate Array is : ${certificates[len-1]}`);

 console.log("====== 9 =======");
 console.log(`The Complete Object is :`, Professer); 

 console.log("====== 10 =======");
 for (let index = 0; index < certificates.length; index++) {
    const element = certificates[index];
    console.log(element); 
} 