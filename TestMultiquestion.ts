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

class Copier {
  private paper: number = 0;
  private copies: number = 0;

  public SetPaper(paper: number): void {
    this.paper = paper;
  }

  public SetCopies(copies: number): void {
    this.copies = copies;
  }

  public Copy(text: string): void {
    for (let i = 0; i < this.copies; i++) {
      if (!this.CheckPaper()) break;
      console.log(text);
      this.paper--;
    }
  }

  public CheckPaper(): boolean {
    return this.paper > 0;
  }
}

const xerox: Copier = new Copier();

xerox.SetPaper(5);
xerox.SetCopies(3);
xerox.Copy("77");
console.log(xerox.CheckPaper() ? "Sufficient paper" : "Not enough paper");
xerox.Copy("44");
console.log(xerox.CheckPaper() ? "Sufficient paper" : "Not enough paper");