let n = 0;
let max = 1000;
let pares = 0;

for (let i = n; i < max; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  pares++;
}
console.log("Total de numeros pares: " + pares);

// Break = Para a execução do loop.
// Continue = Para a interação atual do loop e passa para a proxima.

// while (n < max) {
//   console.log("CFB Cursos - " + n);
//   if (n > 10) {
//     break;
//   }
//   n++;
// }

// console.log("Fim do programa");
