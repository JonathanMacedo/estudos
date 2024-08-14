const p_array = document.querySelector("#array");
const btnReduzir = document.querySelector("#btnReduzir");
const resultado = document.querySelector("#resultado");

const elementos_array = [8, 8, 2, 4, 0];
p_array.innerHTML = "[" + elementos_array + "]";
let ant = [];
let atu = [];
let dob = [];

btnReduzir.addEventListener("click", (evt) => {
  resultado.innerHTML = elementos_array.reduce((anterior, atual, pos) => {
    ant.push(anterior);
    atu.push(atual);
    dob.push(atual * 2);
    return atual + anterior;
  });
  resultado.innerHTML +=
    "<br/> Valor anterior: " +
    ant +
    "<br/> Valor atual: " +
    atu +
    "<br/> O dobro do Valor: " +
    dob;
});
