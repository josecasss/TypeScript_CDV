/**
 * UNIVERSIDAD DE TYPESCRIPT
 * UNIDAD I: SINTAXIS, VARIABLES Y OPERADORES
 * * OBJETIVO: Dominar la declaracion de estado y la manipulacion basica de datos.
 */

/* --- BREVIARIO TEORICO --- */

/**
 * 1. DECLARACION:
 * - const: Para valores que no cambiaran (Inmutables).
 * - let: Para valores que evolucionan durante la ejecucion.
 * 2. TIPOS PRIMITIVOS: string (texto), number (enteros/decimales), boolean (true/false).
 * 3. INTERPOLACION: Uso de ` ` (backticks) y ${} para insertar variables en textos.
 * 4. OPERADORES: +, -, *, /, % (modulo/resto).
 */

/* --- LABORATORIO DE PRACTICA --- */

/**
 * INSTRUCCIONES:
 * Resuelve cada ejercicio justo debajo de su enunciado.
 * Manten el tipado explicito en todas tus declaraciones.
 * Ej: let variable: tipo = valor;
 */

// 1. Crea una constante llamada 'nombreProfesor' y asignale tu nombre o el mio.

let nombreProfesor: string = "Freddy";
console.log(nombreProfesor);

// 2. Declara una variable 'puntosDeVida' de tipo numero con un valor inicial de 100.

let puntosDeVida: number = 100;

console.log(puntosDeVida);

// 3. Define una variable booleana 'esEstudiante' que sea verdadera.

let esEstudiante: boolean = true;

console.log(esEstudiante);

// 4. Crea una constante para la velocidad de la luz (299792458) y asegurate de que sea tipo 'number'.

const velocidadLuz: number = 299792458;

console.log(`La velocidad de la luz es ${velocidadLuz}`);

// 5. [ERROR DE DISENO] Intenta declarar una variable tipo 'string' llamada 'edad',
// asinale un numero y comenta la linea explicando por que falla TypeScript.

let edad: string;

//edad =15
edad = "quince";

// 6. Realiza una suma de dos numeros y guarda el resultado en una variable llamada 'sumaTotal'.

let sumaTotal: number;
sumaTotal = 5 + 7;

console.log(sumaTotal);

// 7. Usa la interpolacion para crear un mensaje que diga: "Bienvenido, [nombreProfesor]".

console.log(`Bienvenido ${nombreProfesor}`);

// 8. Calcula el area de un cuadrado cuyo lado mide 15. Guarda el resultado en 'areaCuadrado'.

let areaCuadrado: number;

areaCuadrado = 15 ** 2;

console.log(`El area del cuadrado es ${areaCuadrado}`);

// 9. Declara una variable 'estaRegistrado' sin valor inicial, pero con tipo booleano.

let estaRegistrado: boolean;

// 10. Asigna el valor 'false' a la variable 'estaRegistrado' del ejercicio anterior.

estaRegistrado = false;

// 11. Crea un pequeno objeto literal que represente un 'Coche' con propiedades: marca (string) y ano (number).

interface Coche {
  marca: string;
  ano: number;
}

let miCoche: Coche = {
  marca: "Mercedes",
  ano: 1997,
};

// 12. Utiliza el operador de modulo (%) para encontrar el resto de 17 dividido entre 5 y guardalo en 'resultadoModulo'.

let resultadoModulo: number;

resultadoModulo = 17 % 5;

console.log(`El modulo es ${resultadoModulo}`);

// 13. Crea una variable 'precioProducto' con valor 19.99 y otra 'cantidad' con valor 3.

let precioProducto: number = 19.99;

let cantidad: number = 3;

// Calcula el precio total en una constante 'totalFactura'.

const totalFactura: number = precioProducto * cantidad;

console.log(`La factura es ${totalFactura}`);

// 14. Demuestra la sensibilidad a mayusculas (Case Sensitivity):
// Declara 'Dato' y 'dato' como variables distintas con valores diferentes.

let Dato: string = "PAPA";

let dato: string = "papa";

// 15. [RETO DE ARQUITECTURA] Crea una constante 'ID_SISTEMA' que combine un prefijo de texto "SYS-"
// con un numero aleatorio generado por Math.random().

const ID_SISTEMA: string = "SYS-" + Math.floor(Math.random() * 10000);

console.log(ID_SISTEMA);
