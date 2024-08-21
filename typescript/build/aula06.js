"use strict";
let numeros = [10, 2, 44];
numeros.push(50);
numeros.unshift(23);
numeros.pop();
numeros.shift();
console.log(numeros);
// ReadonlyArray = apenas ler, sendo impossível alterar esse array.
let numeros_ro = [100, 300, 500];
console.log(numeros_ro);
