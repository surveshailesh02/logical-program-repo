console.log("================= Q.1 Vehicles ===============");
  class Vehicles {
    Name
    Colour
    year
    Speed
    price
    constructor(Name,Colour,year,Speed,price) {
        this.Name = Name,
        this.Colour = Colour,
        this.year = year,
        this.Speed = Speed,
        this.price = price
    }
       //  Methods //
      details(){
        console.log(`Details : ${this.Name}, ${this.Colour}, ${this.year}, ${this.Speed}, ${this.price}`);
        
      }
  }
  const Ertiga = new Vehicles ("Ertiga","White","2024", "220 km/hr","10 Lac");
   console.log(Ertiga);
  const Nexa = new Vehicles ("Nexa", "Black", "2009", "180 km/hr", "12 Lac");
  console.log(Nexa);
  const Thar = new Vehicles ("Thar","Black", "2009","280 km/hr","20 Lac");
  console.log(Thar);
  const Hyundai = new Vehicles ("Hyundai", "White", "2014", "170 km/hr", "10 Lac");
  console.log(Hyundai);
  
  console.log("================= Q.2 College ===============");
  class College {
    Name
    University
    Students
    Library

    constructor(Name,University,Students,Library){
        this.Name = Name,
        this.University = University,
        this.Students = Students,
        this.Library = Library
    }
      // Methods //
      details () {
        console.log(`display : ${this.Name}, ${this.University}, ${this.Students}, ${this.Library}`);
      }
  }
  const RFNaikVidyalaya = new College ("R. F. Naik Vidyalaya", "Mumbai","30000","14000");
  console.log(RFNaikVidyalaya)
  const DYPatil = new College ("D.Y.Patil", "Pune", "18000", "20000");
  console.log(DYPatil)
  const Modern = new College ("Modern", "Satara", "15000", "12000");
  console.log(Modern)
  
  
  
   
  
   
  
  