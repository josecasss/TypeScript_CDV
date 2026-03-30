// const printDownToZero = (start: number): void => {
//   let line = "";

//   for (let i = start; i >= 0; i--) {
//     line += i;
//   }

//   console.log(line);
// };

// for (let count = 0; count < 4; count++) {
//   printDownToZero(7);
// }

//Objects
//1.

// class Computer {
//   // Inicializamos con un valor por defecto o permitimos que sea undefined
//   ram: number = 0;
// }

// // Creamos el objeto y lo asignamos a la variable "dell"
// const dell: Computer = new Computer();

// // Ahora puedes acceder y cambiar el valor
// dell.ram = 16;

// console.log(`La RAM de mi Dell es de ${dell.ram}GB`);

//2.

// class Bucket {
//  private liters: number = 7;

//  public getLiters(liters:string):void
// {
//   console.log(`The bucket has ${this.liters} liters`);
// }

// }

// const myBucket: Bucket = new Bucket();

// myBucket.getLiters("liters");

//3.

// class Card {
//  private credit: number = 100;

//  public Pay(ammount:number):void
// {
//   this.credit -= ammount;
// }

//  public getBalance():number
// {
//   return this.credit;
// }
// }

// const visa: Card = new Card();
// const master: Card = new Card();

// visa.Pay(30);
// master.Pay(40);

// console.log(`Visa balance: ${visa.getBalance()}€`);
// console.log(`Master balance: ${master.getBalance()}€`);

//4.

// class Balance {
//   private right: number = 0;
//   private left: number = 0;

//   public OnRight(Pright: number) {
//     this.right = Pright;
//   }

//   public OnLeft(Pleft: number) {
//     this.left = Pleft;
//   }

//   public IsBalanced(): boolean {
//     if (this.right === this.left) {
//       return true;
//     }
//     return false;
//   }
// }

// const myBalance:Balance = new Balance();

// myBalance.OnRight(10)
// myBalance.OnLeft(12)
// myBalance.OnLeft(10)

// const result = myBalance.IsBalanced() ? "Yes, balanced." : "No, it is not balanced.";
// console.log(result);

//5.

// class Copier {
//   private paper: number = 0;
//   private copies: number = 0;

//   public SetPaper(paper: number): void {
//     this.paper = paper;
//   }

//   public SetCopies(copies: number): void {
//     this.copies = copies;
//   }

//   public Copy(text: string): void {
//     for (let i = 0; i < this.copies; i++) {
//       if (!this.CheckPaper()) break;
//       console.log(text);
//       this.paper--;
//     }
//   }

//   public CheckPaper(): boolean {
//     return this.paper > 0;
//   }
// }

// const xerox: Copier = new Copier();

// xerox.SetPaper(5);
// xerox.SetCopies(3);
// xerox.Copy("77");
// console.log(xerox.CheckPaper() ? "Sufficient paper" : "Not enough paper");
// xerox.Copy("44");
// console.log(xerox.CheckPaper() ? "Sufficient paper" : "Not enough paper");

//Inheritance

//1.
// class Cabinet {
//   protected capacity:number = 0;

//   public SetCapacity(capacity: number): void {
//     this.capacity = capacity;
//   }

//   public GetCapacity(): number | string {
//     return this.capacity > 0 ? this.capacity : "No capacity";
//   }
// }

// class Refrigerator extends Cabinet {

//   protected temperature:number = 19.0

//   public SetTemperature(temperature: number): void {
//     this.temperature = temperature;
//   }

//   public GetTemperature(): number | string {
//     return this.temperature > 0 ? this.temperature : "No temperature set up";
//   }
// }

// const amica: Refrigerator = new Refrigerator()

// amica.SetCapacity(25)
// amica.SetTemperature(3)
// console.log(amica.GetCapacity())
// console.log(amica.GetTemperature())

//2.

// class Lamp {
//   public watt: number = 75;
//   public lumens: number = 900;

//   public GetLumens(): number | string {
//     return this.lumens > 0 ? this.lumens : "No lumens";
//   }

//   public SetWatt(newWatt: number): void {
//     this.lumens = newWatt * 12;
//   }
// }

// class LEDLamp extends Lamp {
//   public GetWatt(): number | string {
//     return this.watt > 0 ? this.watt : "No wattage";
//   }

//   public SetWatt(newWatt: number): void {
//     this.lumens = newWatt * 70;
//   }
// }

// const luce: Lamp = new Lamp();
// const phoenix: LEDLamp = new LEDLamp();

// luce.SetWatt(30)
// phoenix.SetWatt(30)
// console.log(luce.GetLumens())
// console.log(phoenix.GetLumens())

//3.

// class Heater {
//   public watt: number = 0;

//   public SetWatt(watt: number): void {
//     this.watt = watt;
//   }

//   public GetWatt(): number | string {
//     return this.watt > 0 ? this.watt : "No wattage";
//   }
// }

// class Kettle extends Heater {
//   public liters: number = 0.0;

//   constructor(liters: number, watt: number) {
//     super();
//     this.liters = liters;
//     this.watt = watt;
//   }

//   public GetLiters(): number | string {
//     return this.liters > 0 ? this.liters : "No liters";
//   }
// }

// class Iron extends Heater {
//   public temp: number = 0.0;
//   constructor(temp: number, watt: number) {
//     super();
//     this.temp = temp;
//     this.watt = watt;
//   }

//   public GetTemp(): number | string {
//     return this.temp > 0 ? this.temp : "No temperature";
//   }
// }

// const edenberg: Kettle = new Kettle(1.7, 1800);
// const philips: Iron = new Iron(190, 900);

// console.log(`Edenberg kettle: ${edenberg.GetLiters()} liters, ${edenberg.GetWatt()} watts`);
// console.log(`Philips iron: ${philips.GetTemp()} °C, ${philips.GetWatt()} watts`);

//4.

// interface Inflatable {
//   SetPressure(pressure: number): void;
//   GetPressure(): number | string;
// }

// class SoccerBall implements Inflatable {
//   public number: number = 0;
//   public pressure: number = 0;

//   constructor(public ballNumber: number) {}

//   SetPressure(pressure: number): void {
//     this.pressure = pressure;
//   }
//   GetPressure(): number | string {
//     return this.pressure > 0 ? this.pressure : "No pressure";
//   }
// }

// class RugbyBall implements Inflatable {
//   public length: number = 0;
//   public circumference: number = 0;
//   public inflation: number = 0;

//   constructor(
//     public Length: number,
//     public Circumference: number,
//   ) {}

//   SetPressure(pressure: number): void {
//     this.inflation = pressure;
//   }
//   GetPressure(): number | string {
//     return this.inflation > 0 ? this.inflation : "No pressure";
//   }
// }

// const brazuca: SoccerBall = new SoccerBall(5);
// const gilbert: RugbyBall = new RugbyBall(28, 60);

// brazuca.SetPressure(11);
// gilbert.SetPressure(10);
// console.log(gilbert.GetPressure());
// console.log(brazuca.GetPressure());

//5.

interface Fuel {
  SetFuel(ammount: number): void;
  GetFuel(): number | string;
}

interface Gas {
  SetGas(ammount: number): void;
  GetGas(): number | string;
}

class Engine {
  public power: number = 0;
  public SetPower(power: number): void {
    this.power = power;
  }
}

class Car extends Engine implements Fuel, Gas {

    public gasAmmount: number = 0;
    public fuelAmmount: number = 0;

  SetFuel(ammount: number): void {
    this.fuelAmmount = ammount;
  }
  GetFuel(): number | string {
    return this.fuelAmmount;
  }

  SetGas(ammount: number): void {
    this.gasAmmount = ammount;
  }

  GetGas(): number | string {
    return this.gasAmmount;
  }
}

class Bus extends Car {
  public passengers: number = 0;

  SetPassengers(count: number): void {
    this.passengers = count;
  }
}

const bus: Bus = new Bus();

bus.SetFuel(45)
bus.SetGas(300)
bus.SetPassengers(45)
bus.SetPower(290)
console.log(bus.GetGas())