const caixa1 = document.querySelector("#caixa1");
const btn_c = [...document.querySelectorAll(".curso")];

// console.log(caixa1.hasChildNodes()); // retorna um valor boleano True ou False
// console.log(btn_c[0].hasChildNodes()); // aqui apenas escolhemos a variavel e sua possição na array

console.log(btn_c[0].childNodes);

console.log(caixa1.children.length > 0 ? "Possui filhos" : "Não possui filhos");

console.log(caixa1.children[1].innerHTML=('Teste'))

// if (caixa1.children.length >0){
//   console.log('Possui Filhos')
// }else{
//   console.log('Não possui filhos')
// }

// console.log(caixa1.children[caixa1.children.length - 1]);
// console.log(caixa1.firstChild);
// console.log(caixa1.lastChild);