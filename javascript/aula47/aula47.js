const p_array = document.querySelector("#array");
const txt_pesquisar = document.querySelector("#txt_pesquisar");
const btnVerificar = document.querySelector("#btnVerificar");
const resultado = document.querySelector("#resultado");

const elementos_array = [10, 15, 20, 34, 40];
p_array.innerHTML = "[" + elementos_array + "]";

btnVerificar.addEventListener("click",(evt)=>{
    resultado.innerHTML= "Array não confere!"
});

// btnPesquisar.addEventListener('click',(evt)=>{

//     const ret= elementos_array.find((e,i)=>{
//         if (e.toLocaleUpperCase() == txt_pesquisar.value.toLocaleUpperCase()){
//             resultado.innerHTML= 'O valor é: ' + e + ' Na posição: ' + ++i
//             return e
//         }else{
//             resultado.innerHTML= "Valor não encontrado!"
//         }
//     })
//     // console.log(ret)
// })
