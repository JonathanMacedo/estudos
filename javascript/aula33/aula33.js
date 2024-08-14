 
const cursos = [...document.getElementsByClassName("curso")];
const cursoc1 = [...document.getElementsByClassName('c1')]
const query_div = [...document.querySelectorAll('div')]
const query_curso = [...document.querySelectorAll('.curso')]
const query_c1 = [...document.querySelectorAll('.c1')]

console.log(query_c1);
console.log(query_div);
console.log(query_curso);

cursoc1.map((el) => {
  el.classList.add("destaque");
});
