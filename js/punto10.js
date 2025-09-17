const numero = parseInt(prompt("Por favor, ingresa un número:"));
if (numero % 2 === 0) {
  document.writeln("El " + numero + " es divisible por 2.");
} else if (numero % 3 === 0) {
  document.writeln("El " + numero + " es divisible por 3.");
} else if (numero % 5 === 0) {
  document.writeln("El " + numero + " es divisible por 5.");
} else if (numero % 7 === 0) {
  document.writeln("El " + numero + " es divisible por 7.");
} else {
  document.writeln("El " + numero + " no es divisible por 2, 3, 5 o 7.");
}
