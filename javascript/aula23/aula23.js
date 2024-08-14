// Parametros REST são aqueles que usam ... ou Spread.

function soma(...valores) {
  //Com o FOR IN não é necessario mais usar essa operação: let tam = valores.length
  res = 0;
  for (let v of valores) {
    res = res + v;
  }
  return res;
}

console.log(soma(10, 5, 2, 8));
