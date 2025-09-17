const numero = parseInt(prompt("Por favor, ingresa un número:"));
let divisores = "";
if (numero % 2 === 0) {
  divisores += "(2) ";
}
if (numero % 3 === 0) {
  divisores += "(3) ";
}
if (numero % 5 === 0) {
  divisores += "(5) ";
}
if (numero % 7 === 0) {
  divisores += "(7) ";
} 
if (divisores === "") {
  document.writeln("El " + numero + " no es divisible por 2, 3, 5 o 7.");
}else {
  document.writeln("El " + numero + " es divisible por " + divisores + ".");
}