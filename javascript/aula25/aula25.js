// Função anonima padrão: const f = function (v1,v2){return v1 + v2}

// Função anonima Construtora: const f = new Function ('v1','v2', 'return v1 + v2')

// Arrow Function normalmente são usadas para utilizações mais simples.

// Arrow Funtion:
const soma=(v1,v2)=>{return v1+ v2} 
console.log(soma(10,5))

// Operações simples não é necessario as {}
const nome=n=>n
console.log(nome('Jonathan'))

const add=v=>v+10
console.log(add(10))