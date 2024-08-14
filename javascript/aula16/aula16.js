const objs = document.getElementsByTagName('div')

let num = [10, 20, 30, 40, 50];

for (o of objs) {
  console.log(o);
}

for (o in objs) {
  console.log(o);
}

//For IN ele intera a posição de uma coleção, enquanto o For OF, intera o valor do elemento que tem dentro de uma coleção.

// O For padrão abaixo é o mesmo de se utilizar o For IN
// for (let i = 0; i < num.length; i++) {
//   console.log(i);
// }
