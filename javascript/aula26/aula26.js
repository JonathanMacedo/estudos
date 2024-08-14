// Isso vai ser confuso, boa sorte para você entender 😉

// const soma = (...valores) => {
//   const somar = (val) => {
//     let res = 0;
//     for (v of val) res += v;
//     return res;
//   };
//   return somar(valores);
// };

// console.log(soma(10, 5, 15));

// entender o que esta acontecendo acima vai ser um desafio, novamente, boa sorte 🤗

//outro exemplo pra talvez ficar mais facil:

const somar = (val) => {
  let res = 0;
  for (v of val) res += v;
  return res;
};

const soma = (...valores) => {
  return somar(valores);
};

// console.log(soma(10, 5, 15));
valor = [10, 5, 15];
console.log(soma(...valor));
