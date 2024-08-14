const caixa1 = document.querySelector("#caixa1");
const btn_c = [...document.querySelectorAll(".curso")];
const cursos = ["html", "react", "c#"];

cursos.map((el, chave) => {
  const novoele = document.createElement("div"); // criar um elemento
  novoele.setAttribute(
    "id",
    chave /* a chave é um conjunto de numeros que o map atribui para cada elemento*/
  ); // atribuir caracteristicas
  novoele.setAttribute("class", "curso c1");
  novoele.innerHTML = el;

  const btn_lixo = document.createElement("img");
  btn_lixo.setAttribute("src", "./lixo.png");
  btn_lixo.setAttribute("class", "btn_lixo");
  novoele.addEventListener("click", (evt) => {
    console.log(evt.target);
    caixa1.removeChild(evt.target.parentNode);
  });


  novoele.appendChild(btn_lixo);
  caixa1.appendChild(novoele);
});
