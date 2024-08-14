const p_array = document.querySelector("#array");
const txt_pesquisar = document.querySelector("#txt_pesquisar");
const btnVerificar = document.querySelector("#btnVerificar");
const resultado = document.querySelector("#resultado");

const elementos_array = [8, 8, 2, 4, 0];
p_array.innerHTML = "[" + elementos_array + "]";

// No metodo some apenas um elemento tem que satisfazer a condição.

btnVerificar.addEventListener("click", (evt) => {
    const retorno = elementos_array.some((e, i) => {
      if (e < 18) {
        resultado.innerHTML = "Todos os numeros é menor que 18! 😭" + ++i;
      }
      return e >= 18;
    });
    if (retorno) {
      resultado.innerHTML = "Tudo certo 😁";
    }
    console.log(retorno);
  });
  


// No metodo every, todos os elementos tem que satisfazer a condição.

// btnVerificar.addEventListener("click", (evt) => {
//   const retorno = elementos_array.every((e, i) => {
//     if (e < 18) {
//       resultado.innerHTML = "Um numero é menor que 18! 😭" + ++i;
//     }
//     return e >= 18;
//   });
//   if (retorno) {
//     resultado.innerHTML = "Tudo certo 😁";
//   }
//   console.log(retorno);
// });

