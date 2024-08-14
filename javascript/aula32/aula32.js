const cursos = [...document.getElementsByClassName("curso")];
const cursoc1 = [...document.getElementsByClassName('c1')]
console.log(cursos);

cursoc1.map((el) => {
  el.classList.add("destaque");
});
