let frase = prompt("Escribe una frase (máximo 10 caracteres):");
if (frase.length > 10) {
  console.log("La frase no debe superar los 10 caracteres.");
} else {
  let vocales = " ";
  if ("aeiouAEIOU".includes(frase.charAt(0))) vocales += frase.charAt(0);
  if ("aeiouAEIOU".includes(frase.charAt(1))) vocales += frase.charAt(1);
  if ("aeiouAEIOU".includes(frase.charAt(2))) vocales += frase.charAt(2);
  if ("aeiouAEIOU".includes(frase.charAt(3))) vocales += frase.charAt(3);
  if ("aeiouAEIOU".includes(frase.charAt(4))) vocales += frase.charAt(4);
  if ("aeiouAEIOU".includes(frase.charAt(5))) vocales += frase.charAt(5);
  if ("aeiouAEIOU".includes(frase.charAt(6))) vocales += frase.charAt(6);
  if ("aeiouAEIOU".includes(frase.charAt(7))) vocales += frase.charAt(7);
  if ("aeiouAEIOU".includes(frase.charAt(8))) vocales += frase.charAt(8);
  if ("aeiouAEIOU".includes(frase.charAt(9))) vocales += frase.charAt(9);
  console.log("Las vocales que aparecen son: " + vocales) + ".";
}
