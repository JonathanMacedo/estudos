const http = require('http')
const eventos = require('events')
const EventosEmissor = new eventos.EventEmitter()

const final = ()=>{console.log('Fim do processo')}

EventosEmissor.on('msg',()=>{EventosEmissor.on('msg',()=>{console.log('Curso de Node.js')})})
EventosEmissor.on('fim', final)

const porta = process.env.PORT || 3000
const retorno =()=>{console.log('Servidor Rodando')}
const servidor= http.createServer((req, res)=>{
    EventosEmissor.emit('msg')
    res.writeHead(200,{'content-type': 'text/plain'})

    res.write('CFB Cursos')
    EventosEmissor.emit('fim')
    res.end()
})

servidor.listen(porta,retorno)