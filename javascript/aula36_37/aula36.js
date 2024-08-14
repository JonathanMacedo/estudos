const caixa1 = document.querySelector("#caixa1");
const btn_c1 = document.querySelector("#c1");
const cursos = [...document.querySelectorAll(".curso")];

//Não é dificil, bem basico, qualquer duvida da uma procurada ai 

caixa1.addEventListener("click", (event) => {
  console.log(event);
  console.log("clicou");
});

cursos.map((el) => {
  el.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});
