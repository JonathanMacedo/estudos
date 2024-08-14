const caixa1 = document.querySelector("#caixa1");
const btn_c = [...document.querySelectorAll(".curso")];
const cursos = ["html", "react", "c#"];

cursos.map((el,chave) => {
  const novoele = document.createElement("div"); // criar um elemento
  novoele.setAttribute("id", chave /* a chave é um conjunto de numeros que o map atribui para cada elemento*/); // atribuir caracteristicas
  novoele.setAttribute("class", "curso c1");
  novoele.innerHTML=el
  caixa1.appendChild(novoele)
});

// const novoele = document.createElement("div"); // criar um elemento
// novoele.setAttribute("id", "c1"); // atribuir caracteristicas
// novoele.setAttribute("class", "curso c1");
// novoele.innerHTML = "REACT NATIVE";

// caixa1.appendChild(novoele);
