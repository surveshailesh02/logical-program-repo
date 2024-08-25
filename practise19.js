 console.log("================== step 1 =======================");

  let multiply = ()=>{ 
  console.log("Good Morning,Today is Friday");
  }
  multiply();

  console.log("================== step 2 =======================");
  let multiply1 = (n1,n2,n3=1) =>{
    const result = n1*n2*n3;
    console.log(result);
  }
  multiply1(5,5,2);
  multiply1(10,4);

  console.log("================== step 3 =======================");
  let multiply2 = (n1,n2,n3,n4,n5) =>{
    const result = n1+n2+n3+n4+n5;
    console.log(result);
    return result;
  }
  multiply2(100,100,200,349,756);
  multiply2("I am","learning","ES6","features","in depth");