function monthOfYear(month) {
  switch (month) {
    case 1:
      console.log("January");
      break;
    case 2:
      console.log("February");
      break;
    case 3:
      console.log("March");
      break;
    case 4:
      console.log("April");
      break;
    case 5:
      console.log("May");
      break;
    case 6:
      console.log("June");
      break;
    case 7:
      console.log("July");
      break;
    case 8:
      console.log("August");
      break;
    case 9:
      console.log("September");
      break;
    case 10:
      console.log("Octomber");
      break;
    case 11:
      console.log("November");
      break;
    case 12:
      console.log("December");
      break;
    default:
      break;
  }
}
monthOfYear(0);
console.log(`Invalid Year ${0}`);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
console.log(`Invalid year ${100}`);
monthOfYear(null);
console.log(`Invalid Year ${null}`);
monthOfYear(undefined);
console.log(`Invalid Year ${undefined}`);
