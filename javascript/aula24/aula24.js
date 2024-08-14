// Função anonimas so são executadas quando estão no seu tempo de execução,a vantagem é que so ocupa espaço de memoria quando são executadas.

// const f = function(v1,v2){
//     return v1+v2
// }

// console.log(f(10,5)) //Para ser executada precisa estar dentro do console.log


// Utilizando o NEW e o Function com letra maiuscula, paras criar funções simples.
const f = new Function('v1', 'v2','v3', 'return v1 + v2 + v3') // Função Construtora Anonima

console.log(f(10,5,15))