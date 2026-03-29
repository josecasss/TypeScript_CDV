/**
 * TYPESCRIPT UNIVERSITY
 * UNIT IV: FUNCTIONS AND FUNCTIONAL LOGIC
 * * OBJECTIVE: Master the definition of reusable logic units.
 * FOCUS: Return types, parameter safety, and modern arrow functions.
 */

/* --- ACADEMIC LESSON --- */

/**
 * 1. FUNCTION STRUCTURE:
 * function name(param: type): returnType { ... }
 * * 2. VOID TYPE: 
 * Used when a function does not return any value.
 * * 3. ARROW FUNCTIONS (Modern Syntax):
 * const name = (param: type): returnType => { ... }
 * * 4. OPTIONAL PARAMETERS:
 * Use '?' to mark a parameter as optional.
 * * 5. DEFAULT PARAMETERS:
 * Assign a value in the signature: (param: type = defaultValue).
 */

/* --- PRACTICE LABORATORY (15 EXERCISES) --- */

/**
 * INSTRUCTIONS:
 * Implement the following functions using explicit typing.
 * Choose between traditional 'function' syntax or 'arrow functions' as requested.
 */

// 1. Basic Function: Create a function 'greet' that returns "Hello World" (string).

const greet = (): void => {
  console.log("Hello World");
}

greet();

// 2. Parameters: Create a function 'sum' that takes two numbers and returns their sum.

const sum = (a: number, b: number): number => {
  return a + b;
}

console.log(sum(5, 7));

// 3. Void: Create a function 'logMessage' that receives a string and prints it to the console (returns void).


// 4. Arrow Function: Convert the 'sum' function from exercise 2 into a modern arrow function.


// 5. String Manipulation: Create a function 'getLength' that returns the number of characters in a string.


// 6. Boolean Logic: Create a function 'isEven' that returns true if a number is even, false otherwise.


// 7. Optional Parameters: Create a function 'getFullName' that takes 'firstName' and 'lastName' (optional). 
// If 'lastName' is missing, return only 'firstName'.


// 8. Default Parameters: Create a function 'calculateTax' that takes a 'price' and a 'taxRate' (default is 0.15).


// 9. Array Parameters: Create a function 'getAverage' that takes an array of numbers and returns the average.


// 10. Type Inference: Create a function that takes a number and returns it multiplied by 2. 
// Do NOT specify the return type explicitly and see how TS infers it.


// 11. Callback Basics: Create a function 'processInput' that takes a string and a callback function. 
// The callback should receive a string and return void.


// 12. Mathematical Utility: Create a function 'calculateCircleArea' (PI * r^2). Use Math.PI.


// 13. String Formatting: Create a function 'toCurrency' that takes a number and returns a string formatted as "$X.XX".


// 14. Logic Branching: Create a function 'getGrade' that takes a score (0-100) 
// and returns a letter grade (A, B, C, D, F) based on university standards.


// 15. [ARCHITECTURE CHALLENGE] Functional Registry.
// Create a function 'createAccount' that takes 'username', 'email', and 'age'.
// It must return an object containing these properties plus an 'id' (randomly generated) 
// and a 'createdAt' timestamp (Date).


console.log("--- Unit IV Laboratory ready for review ---");