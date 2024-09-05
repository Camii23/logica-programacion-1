/*Instruciones:
Crear un programa en Javascript que realice lo siguiente:
1. Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
2. Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
3. Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
4. Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.*/

alert("Vamos a ordenar tus números");

// Solicitar números al usuario
let num1 = parseFloat(prompt("Ingrese el primer número: "));
let num2 = parseFloat(prompt("Ingrese el segundo número: "));
let num3 = parseFloat(prompt("Ingrese el tercer número: "));

// Ordenar números
function ordenarNumeros(a, b, c) {
  let mayor = Math.max(a, b, c);
  let menor = Math.min(a, b, c);
  let centro = a + b + c - mayor - menor;
  return { mayor, centro, menor };
}

let { mayor, centro, menor } = ordenarNumeros(num1, num2, num3);

// Imprimir números de mayor a menor y de menor a mayor
console.log(`Los números ordenados de mayor a menor son: ${mayor}, ${centro}, ${menor}`);
console.log(`Los números ordenados de menor a mayor son: ${menor}, ${centro}, ${mayor}`);

// Verificar si todos los números son iguales
if (num1 === num2 && num2 === num3) {
  console.log("Todos los números son iguales.");
}else if (num1 === num2){
    console.log("Numero 1 y numero 2 son iguales");
} else if (num2 === num3){
    console.log("Numero 2 y numero 3 son iguales");
}else if (num1 === num3){
    console.log("Numero 1 y numero 3 son iguales");
}else {
  console.log("Los números son diferentes.");
}