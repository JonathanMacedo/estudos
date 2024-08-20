const http = require("http");
const fs = require("fs");
const port = process.env.PORT;

// readFileSync lê o arquivo especificado.

const server = http.createServer((req, res)=>{
fs.readFileSync('aula05.html',(err, aquivo)=>{
    res.writeHead(200, {'content-type' : 'text/html'})
    res.write(aquivo)
    res.end()
})
})

server.listen(port || 3000, ()=>{console.log('Servidor Rodando')})