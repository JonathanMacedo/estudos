"use strict";
// Tuplas = define qual o tipo de valor que sera recebido no array.
let coisas = ["canivete", 12, true]; // no caso pode apenas 2 elementos nesse array.
// para colocar mais elementos tem que adicionar mais tipos na Tupla.
coisas.push("Kit medico", 20, false); // não será possível alterar pois esta em mode de leitura.
// até tem como adicionar novos elementos, mas não se pode chamar esses elementos no array, pois so tem 3 indices no escopo.
console.log(coisas);
console.log(coisas[2]);
