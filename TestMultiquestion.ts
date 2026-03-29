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

class Card {
 private credit: number = 100;

 public Pay(ammount:number):void
{
  this.credit -= ammount;
}

 public getBalance():number
{
  return this.credit;
}
}

const visa: Card = new Card();
const master: Card = new Card();


visa.Pay(30);
master.Pay(40);

console.log(`Visa balance: ${visa.getBalance()}€`);
console.log(`Master balance: ${master.getBalance()}€`);

// class Car
// {
// private fuel:number;

// constructor()
// {
// this.fuel=0;
// }

// public addFuel(extraFuel:number):void
// {
// this.fuel+=extraFuel;
// }

// public getFuel():number
// {
// return this.fuel;
// }
