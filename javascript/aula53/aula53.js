const caixa= document.querySelector('#caixa')

const cores = ['auzul', 'vermelho', 'rosa', ['marrom', 'laranja', 'amarelo']]
const cursos = ['html', 'css', 'javascript',cores]

// Unshift adiciona um elemento no inicio, e Push adiciona um elemento na array no final.
// cursos.push('c#')
// cursos.unshift('c++')
// cursos.shift()


// Matrizes são doidas!
console.log(cursos[3][3][2])

cursos.map((el)=>{
 let p = document.createElement('p')
 p.innerHTML = el
 caixa.appendChild(p)
})

// Não tankei esse, foi mal
