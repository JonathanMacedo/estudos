(async ()=>{
const db = require('./db')


// const id = 2
// const nom ='Bruno'
// const ida = 45
// await db.atualizeClientes(id,{nome:nom, idade:ida})
// console.log('cliente'+ id + 'atualizado')

const id = 4
await db.deleteClientes(id)
console.log('cliente'+ id + 'deletado')

console.log('Obter todos os clientes')
const clientes = await db.todosClientes()
console.log(clientes)


// console.log('Inserir novo cliente:')
// const nom ='Castro'
// const ida = 12
// await db.insereClientes({nome:nom, idade:ida})
})()        