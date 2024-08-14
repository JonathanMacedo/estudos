//iteiradores é basicamente para saber qual o elemento atual, e qual é sua posição.

const valores = [10, 20, 34, 3];
const it_valores = valores[Symbol.iterator]();

const texto = "Youtube";
const it_texto = texto[Symbol.iterator]();

console.log(texto)
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())


// console.log(valores);
// console.log(it_valores.next());
// console.log(it_valores.next());
// console.log(it_valores.next());
// console.log(it_valores.next());
// console.log(it_valores.next());
