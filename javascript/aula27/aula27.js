// Funções geradoras são identificados pelo sues * ex: function* cores(){ }

// function* cores(){
//     yield  'Vermelho'
//     yield  'Azul'
// }

// let itc = cores()

// console.log(itc.next().value)
// console.log(itc.next().value)
// console.log(itc.next().value)

// function* perguntas() {
//   const nome = yield "Qual é seu nome?";
//   const esporte = yield "Qual é seu esporte favorito?";
//   return "Seu nome é " + nome + ", " + "seu esporte favorito é " + esporte + '!';
// }

// const itc = perguntas();

// console.log(itc.next().value);
// console.log(itc.next("Jonathan").value);
// console.log(itc.next("Futebol").value);

function* contador() {
  let i = 0;
  while (true) {
    yield i++;
    if (i > 10) break;
  }
}
const itc = contador();

for (c of itc) {
  console.log(c);
}