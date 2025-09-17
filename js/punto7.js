const n1 = parseFloat(prompt("Por favor, ingresa el primer número:"));
const n2 = parseFloat(prompt("Por favor, ingresa el segundo número:"));
const n3 = parseFloat(prompt("Por favor, ingresa el tercer número:"));      
if (n1 >= n2 && n1 >= n3) {
    document.writeln("El " + n1 + " es el número más grande");
}
else if (n2 >= n1 && n2 >= n3) {
    document.writeln("El " + n2 + " es el número más grande");
}
else {
    document.writeln("El " + n3 + " es el número más grande");
}