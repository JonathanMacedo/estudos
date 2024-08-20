// Conexão com o banco de dados
const conectar = async ()=>{
    if (global.conexao && global.conexao.state != 'disconnected')
        return global.conexao
    const mysql = require('mysql2/promise.js')
    const con = mysql.createConnection("mysql://root:J23092003s@localhost:3306/cfbcursos")
    console.log('Conectou ao banco')
    global.conexao = con
    return con
}
// Select da tabela
const todosClientes = async()=>{
    const con = await conectar()
    const [linhas] = await con.query('Select * FROM cliente_node')
    return await linhas
};

const insereClientes = async(cliente)=>{
    const con = await conectar()
    const sql = 'insert into cliente_node (nome,idade) values (?,?)';
    const valores = [cliente.nome, cliente.idade]
    await con.query(sql,valores)
};

const atualizeClientes = async(id,cliente)=>{
    const con = await conectar()
    const sql = 'update cliente_node set nome=?,idade=? where id=?';
    const valores = [cliente.nome, cliente.idade, id]
    await con.query(sql,valores)
};

const deleteClientes = async(id)=>{
    const con = await conectar()
    const sql = 'delete from cliente_node where id=?';
    const valores = [id]
    await con.query(sql,valores)
};

module.exports ={todosClientes,insereClientes,atualizeClientes,deleteClientes}