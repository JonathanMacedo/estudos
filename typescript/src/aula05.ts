// Múltiplos tipos de dados de uma variável em .ts, não muito indicado pois perde o intuito de ser fortemente tipada.

let teste: string | number | boolean;
teste = "Jonathan";
teste = 21;
teste = false

let cursos:any[] = ["TS", "JS", "PY", 10, true];
let valores = [10, 3, 4];



cursos.push("CSS");
valores.push(23);

console.log(cursos);
console.log(valores);
