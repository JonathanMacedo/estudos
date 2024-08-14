// O Spread é operador que auxilia na utilização de arrays, onde se pode atribuir valores a novas variavies com mais facilidade, pricipalmente valores HTML.

const obj1 = document.getElementsByTagName("div");
const obj2 = [...document.getElementsByTagName("div")];

obj2.forEach((element) => {
  console.log(element);
});
