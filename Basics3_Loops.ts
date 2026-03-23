/**
 * TYPESCRIPT UNIVERSITY
 * UNIT III: LOOPS AND ITERATIONS
 * * OBJECTIVE: Master repetitive logic and data collection traversal.
 * FOCUS: Performance, Array safety, and Loop selection.
 */

/* --- ACADEMIC LESSON --- */

/**
 * 1. THE FOR LOOP: Best when you know the number of iterations (n).
 * for (let i: number = 0; i < 10; i++) { ... }
 * * 2. THE WHILE LOOP: Best when the number of iterations is unknown (0+).
 * while (condition) { ... }
 * * 3. THE DO-WHILE LOOP: Ensures the code runs at least once (1+).
 * do { ... } while (condition);
 * * 4. ARRAYS: Ordered collections of a specific type.
 * let list: string[] = ["A", "B"];
 * * 5. FOR...OF: Modern way to iterate through array elements.
 * for (let item of list) { ... }
 */

/* --- PRACTICE LABORATORY (15 EXERCISES) --- */

/**
 * INSTRUCTIONS:
 * Complete the following 15 exercises using the most appropriate loop or array method.
 * Remember to keep explicit typing for all your variables.
 */

// 1. Create a 'for' loop that prints numbers from 1 to 10.

// let numbers: number[] = [];
// for (let i: number = 1; i <= 10; i++) {
//     numbers.push(i);
// }
// console.log(numbers);

for (let i: number = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Create a 'while' loop that prints numbers from 10 down to 1.

let i: number = 10;
while (i >= 1) {
  console.log(i);
  i = i - 1;
}

// 3. Declare an array of strings called 'languages' containing 3 programming languages.

let languages: string[] = ["JavaScript", "TypeScript", "Python"];

console.log(languages);

// 4. Use a 'for...of' loop to print each language from the previous array.

//Por cada lenguaje de lenguajes haz esto *3 veces
for (let language of languages) {
  console.log(language);
}

// 5. Calculate the sum of all numbers in this array: [10, 20, 30, 40, 50].

let numbers: number[] = [10, 20, 30, 40, 50];
let sum: number = 0;
for (let number of numbers) {
  sum += number;
}
console.log(sum);

// 6. Create a 'do...while' loop that asks (via console.log simulation) for a "retry" at least once.

let iterador: number = 0;

do {
  console.log("Retry");
  iterador++; // Necesitamos incrementar para que el bucle no sea infinito
} while (iterador < 1);

// 7. Find the largest number in an array of numbers using a loop.

const numeros: number[] = [5, 12, 8, 44, 2, 31];

// 1. Empezamos asumiendo que el primero es el más grande
let max: number = numeros[0]!;

// 2. Recorremos el arreglo con un bucle (empezando desde el índice 1)
for (let i = 1; i < numeros.length; i++) {
  if (numeros[i]! > max) {
    max = numeros[i]!; // Si el actual es mayor, actualizamos nuestro 'max'
  }
}

console.log("El número más grande es:", max);

// 8. Create an array of 5 boolean values and count how many are 'true'.

let booleans: boolean[] = [true, false, true, false, true];
let trueCount: number = 0;

for (let value of booleans) {
  if (value === true) {
    trueCount++;
  }
}

console.log("Cantidad de valores true:", trueCount);

// 9. Use a loop to create a string that looks like a stair: "*", "**", "***", "****", "*****".

let stair: string = "";
for (let step: number = 1; step <= 5; step++) {
  stair += "*";
  console.log(stair);
}

// 10. Multiplication Table: Print the multiplication table of 7 (from 7x1 to 7x10).

for (let multiplier: number = 1; multiplier <= 10; multiplier++) {
  console.log(`7 x ${multiplier} = ${7 * multiplier}`);
}

// 11. Array Filtering: Given [1, 5, 8, 12, 15, 20], print only the numbers greater than 10.

let values: number[] = [1, 5, 8, 12, 15, 20];
for (let value of values) {
  if (value > 10) {
    console.log(value);
  }
}

// 12. Search: Given an array of names, check if "Alice" exists and print "Found" if it does.

let names: string[] = ["Bob", "Carol", "Alice", "David"];
let foundAlice: boolean = false;

for (let name of names) {
  if (name === "Alice") {
    foundAlice = true;
    break;
  }
}

if (foundAlice) {
  console.log("Found");
}

// 13. Create a 2D Array (Matrix) representing a 3x3 Tic-Tac-Toe board with strings.

let board: string[][] = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

console.log(board);

// 14. Infinite Loop Protection: Create a loop that breaks (using 'break') when a random number is greater than 0.8.

while (true) {
  let randomValue: number = Math.random();
  console.log("Random:", randomValue);
  if (randomValue > 0.8) {
    console.log("Loop detenido");
    break;
  }
}

// 15. [ARCHITECTURE CHALLENGE] Inventory System.
// Create an array of objects 'products'. Each product has 'name' (string) and 'price' (number).
// Use a loop to calculate the total value of the entire inventory.

interface Product {
  name: string;
  price: number;
}

let products: Product[] = [
  { name: "Keyboard", price: 40 },
  { name: "Mouse", price: 25 },
  { name: "Monitor", price: 180 },
];

let totalInventoryValue: number = 0;
for (let product of products) {
  totalInventoryValue += product.price;
}

console.log("Valor total del inventario:", totalInventoryValue);

