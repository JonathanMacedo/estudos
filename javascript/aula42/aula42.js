const idades = [10, 23, 43, 54, 2, 54, 21, 34, 21, 65, 5, 15, 10, 13];
const maior = idades.filter((val) => {
  if (val >= 18) return val;
});
const menor = idades.filter((val) => {
  if (val < 18) return val;
});

console.log(idades)
console.log(maior);
console.log(menor);

// Filter os elementos irão passar por ele e somente sera retornado os elementos que atenderem a condição imposta.