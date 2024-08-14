// Function = Um conjunto de instruções que executa uma tarefa ou calcula um valor.

const { soma } = require("../aula22/aula22");

// // ↓ Declaração da função.
// function nome(){
//     console.log('CBF Cursos')
// }

// nome() // Chamada de Função, para que o comando possa ser executado.

// function soma2_10(){
//     let n1 = 2
//     let n2 = 10
//     let soma = n1 + n2
//     console.log('Valor = ' + soma)
// }

// for (let i=0; i<=10; i++){
//     soma2_10()
// }

function mudarTexto() {
  let d1 = document.getElementById("d1");
  let d2 = document.getElementById("d2");
  let d3 = document.getElementById("d3");
  d1.innerHTML = "CBF Cursos";
  d2.innerHTML = "CBF Cursos";
  d3.innerHTML = "CBF Cursos";
}
soma((n1 = 10), (n2 = 20));
