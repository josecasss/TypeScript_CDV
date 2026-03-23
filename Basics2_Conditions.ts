/**
 * TYPESCRIPT UNIVERSITY
 * UNIT II: LOGICAL CONDITIONALS AND CONTROL FLOW
 * * OBJECTIVE: Implement business rules through logical branching.
 * FOCUS: Clean code, strict typing, and architectural logic.
 */

/* --- ACADEMIC LESSON --- */

/**
 * 1. COMPARISON OPERATORS:
 * - === (Strict equality: value and type)
 * - !== (Strict inequality)
 * - >, <, >=, <= (Numerical comparisons)
 * * 2. LOGICAL OPERATORS (Boolean Algebra):
 * - && (AND): Both conditions must be true.
 * - || (OR): At least one condition must be true.
 * - ! (NOT): Inverts the boolean value.
 * * 3. CONTROL STRUCTURES:
 * - if / else if / else: Standard branching.
 * - switch: Multi-case evaluation (best for specific values).
 * - Ternary Operator: condition ? trueValue : falseValue;
 */

/* --- PRACTICE LABORATORY (15 EXERCISES) --- */

/**
 * INSTRUCTIONS:
 * Solve the following logical challenges below each comment.
 * Apply explicit typing to any auxiliary variable you create.
 */

// 1. Declare a variable 'score' (number). If it is >= 60, print "Passed", otherwise "Failed".

let score: number = 40;

const result = score >= 60 ? "Passsed" : "Failed";

console.log(result);

// 2. Determine if a number 'n' is even or odd using the modulo operator and an 'if' statement.

// - `even` = **par**
// - `odd` = **impar**

let n: number = 47;

let result2 = n % 2 === 0 ? "Even" : "Odd";

console.log(result2);

// 3. Scholarship System: If 'gpa' is > 9 and 'age' is < 25, print "Scholarship Granted".

let gpa: number = 15;
let age: number = 19;

let scholarship =
  gpa > 9 && age < 25 ? "Scholarship Granted" : "Scholarship not Granted";

console.log(scholarship);

// 4. Use a 'switch' statement to print the month name based on a number from 1 to 3 (e.g., 1 = "January").

let month = 0;
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
}

// 5. Age Categorization: 0-12 (Child), 13-17 (Teenager), 18+ (Adult). Use 'else if'.

let Age: number = 20;

if (Age <= 12) {
  console.log("Child");
} else if (Age <= 17) {
  console.log("Teenager");
} else {
  console.log("Adult");
}

// 6. Use the ternary operator to assign to a variable 'parity' the text "Even" or "Odd" based on a number.

let m: number = 50;

let parity = m % 2 === 0 ? "Even" : "Odd";

console.log(parity);

// 7. Login Validation: Create variables 'username' and 'password'. If username is "admin" AND password is "1234", print "Access Granted".

let username: string = "admin";
let password: string = "1234";

let access =
  username === "admin" && password === "1234"
    ? "Acess Granted"
    : "Access not Granted";

console.log(access);

// 8. Invert a boolean value 'isActive' using the '!' operator and display the result.

let isActive: boolean = true;

isActive = !isActive;

// 9. Password Strength: Check if a string 'pass' has more than 8 characters. Print "Strong" or "Weak".

let Password: string = "Jose123";

let passwordStrength = Password.length > 8 ? "Strong" : "Weak";

console.log(passwordStrength);

// 10. Temperature Range: If 'temp' is between 18 and 25 degrees (inclusive), print "Optimal Climate".

let temp: number = 24;

let diagnostic = temp > 18 && temp <= 25 ? "Optimal Climate" : "Bad Climate";

console.log(diagnostic);

// 11. VIP Access: If a person 'hasTicket' OR 'isSpecialGuest', print "Welcome to the Event".

let hasTicket: boolean = false;
let isSpecialGuest: boolean = true;

let accessEvent =
  hasTicket && isSpecialGuest
    ? "Welcome to the Event"
    : "Sorry you can not enter";

console.log(accessEvent);

// 12. Create a variable 'day' (string). If it is "Saturday" or "Sunday", print "Weekend", otherwise "Weekday".

let day: string = "Tuesday";

let daycheck = day === "Saturday" || day === "Sunday" ? "Weekend" : "Weekday";

console.log(daycheck);

// 13. Number Sign: Check if a number is positive, negative, or zero using nested structures.

let Number: number = 10;

if (Number === 0) {
  console.log("Es cero");
} else if (Number > 0) {
  console.log("Is positive");
} else Number < 0;
{
  console.log("Is negative");
}

// 14. Discounts: If 'purchaseAmount' > 100, apply a 10% discount and show the total; otherwise, show the original amount.

let purchaseAmount: number = 150;

let checkPurchase =
  purchaseAmount > 100 ? purchaseAmount * 0.9 : purchaseAmount;

console.log(checkPurchase);

// 15. [ARCHITECTURE CHALLENGE] Simulate a Permission System.
// Create a variable 'userRole' (can be "ADMIN", "EDITOR", "VIEWER").
// Use a 'switch' statement to assign to a variable 'accessLevel':
// "Full Access", "Partial Access", or "Read Only" respectively.

let userRole: string = "VIEWER";
let accessLevel: string = "";

switch (userRole) {
  case "ADMIN":
    console.log("Full Access");
    break;
  case "EDITOR":
    console.log("Partial Access");
    break;
  case "VIEWER":
    console.log("Read Only");
    break;
}
