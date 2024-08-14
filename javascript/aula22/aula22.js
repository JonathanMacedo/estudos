// Funções parametrizadas são funções que recebem parametros para serem execuradas.

// function soma(n1, n2) {
//   console.log(n1 + n2);
// }

// soma(10, 20);

//Valores padrões ->
// function soma(n1 = 0,/*Apenas o valor n1 recebe o numero 10*/ n2 = 0){
//     console.log(n1+n2)
// }

// soma(10)

function soma(n1 = 0, n2 = 0) {
  /*Tambem poderia ser:
    let res
    res = n1 + n2
    return res*/
  return n1 + n2;
}

//console.log(soma(10, 10));

function add(v){
    return valor + v
}

valor =0
console.log(valor)

valor =add(10)
console.log(valor)

valor = add(20)
console.log(valor)