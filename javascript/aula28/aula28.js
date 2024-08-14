// const cursos= ['html', 'css', 'js', 'php', 'react']
// cursos.map((el,i)=>{
//     console.log('Elemento: ' + el + ' |' +  ' Posição: '  + i)
// })

// const cursos= ['html', 'css', 'js', 'php', 'react']
// let c=cursos.map((el,i)=>{
//     return 'Tecnologia: ' + el
// })
// console.log(c)


// let el = document.getElementsByTagName("div")
// el=[...el]
// console.log(el)
// el.map((e,i)=>{
//     e.innerHTML="CBF Cursos"
// })

// const el = document.getElementsByTagName('div')
// const val = Array.prototype.map.call(el, ({innerHTML})=>innerHTML)
// console.log(val)

const converter = (e) => parsetInt(e)
const dobrar = (e) => e*2
let num = ['1', '2', '3', '4', '5'].map(dobrar)
console.log(num)
