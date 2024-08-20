const http = require("http");
const fs = require("fs");
const port = process.env.PORT;

// appendFile cria um arquivo quando o servidor é executado.

const server = http.createServer((req, res) => {
  fs.appendFile("teste.txt", "CFB - Curso de Node.JS", (err) => {
    if (err) throw err;
    console.log("Arquivo Criado!");
  });
  res.end()
});

server.listen(port || 3000, () => {
  console.log("Servidor Rodando");
});

