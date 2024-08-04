 
   class Banks {
   constructor(bankName, location, ifscCode, branchCode) {
      this.bankName = bankName,
         this.location = location,
         this.ifscCode = ifscCode,
         this.branchCode = branchCode;
   }
}
      console.log("================== 1 & 2 =======================");
      const yesBank = new Banks ("yes Bank", "Hydrabad", "YESB0000926", "000926");
      console.log(`Bank Details is : Bank Name : ${yesBank.bankName}, Bank Location : ${yesBank.location}, Bank IFSC Code : ${yesBank.ifscCode},  Bank Brach Code : ${yesBank.branchCode}`);
      console.log(`===================================`);

      const SBIBank = new Banks ("SBI Bank", "Gujarat", "SBIB0001245", "1245");
      console.log(`Bank Details is : Bank Name : ${SBIBank.bankName}, Bank Location : ${SBIBank.location}, Bank IFSC Code : ${SBIBank.ifscCode},  Bank Brach Code : ${SBIBank.branchCode}`);
      console.log(`===================================`);

      const MAHBBank = new Banks ("MAHA Bank", "Navi Mumbai", "MAHB00001436", "1436");
      console.log(`Bank Details is : Bank Name : ${MAHBBank.bankName}, Bank Location : ${MAHBBank.location}, Bank IFSC Code : ${MAHBBank.ifscCode},  Bank Brach Code : ${MAHBBank.branchCode}`);
      console.log(`===================================`);

      const AxisBank = new Banks ("Axis Bank", "Delhi", "AxiB0001245", "1245");
      console.log(`Bank Details is : Bank Name : ${AxisBank.bankName}, Bank Location : ${AxisBank.location}, Bank IFSC Code : ${AxisBank.ifscCode},  Bank Brach Code : ${AxisBank.branchCode}`);
      console.log(`===================================`);


      console.log("================== (Open Time 9 AM IST)=======================");
        Banks.prototype.OpenTime = " 9 AM IST ";
        console.log(`Bank Opening Time Is : ${Banks.prototype.OpenTime}`);
        
      console.log("==================== (Close Time 6 PM IST ====================)");
        Banks.prototype.CloseTime = " 6 PM IST ";
        console.log(`Bank Closing TIME IS : ${Banks.prototype.CloseTime}`);

      
      console.log(`Bank Details is : Bank Name : ${SBIBank.bankName}, Bank Location : ${SBIBank.location}, Bank IFSC Code : ${SBIBank.ifscCode},  Bank Brach Code : ${SBIBank.branchCode} Bank Opening Time Is: ${Banks.prototype.OpenTime} & Closing Time Is: ${Banks.prototype.CloseTime}`);
      console.log(`===================================`);

      console.log(`Bank Details is : Bank Name : ${AxisBank.bankName}, Bank Location : ${AxisBank.location}, Bank IFSC Code : ${AxisBank.ifscCode},  Bank Brach Code : ${AxisBank.branchCode}  Bank Opening Time Is: ${Banks.prototype.OpenTime} & Closing Time Is: ${Banks.prototype.CloseTime}`);
      console.log(`===================================`);


     
   