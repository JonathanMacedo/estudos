let num = 10;

let res = !(/*Tem que deixar em (), que se torna um bloco.*/ (num % 2))
  ? "Par"
  : "Impar";

// Sem o !, o resultado cairia em "Impar", pois o resto da divisão seria 0, reseltando em False, ! inverte a afirmação, consequentemente se tornando 1, que é iqual a True.

console.log(res);

// 1 = True
// 0 = False

// Teste lógico ? Se for True : Se for False

//Utilização de ternario: No DOM, se utiliza para retornar o valor na linha para facilitar os testes.

let st = "I";
let nresu = st.toLowerCase();
nresu = (nresu === "a") ? "Ativo" : "Inativo";

console.log(nresu);
