const http = require("http");
const porta = 3000;
const host = "127.0.0.1"; // pode tambem alterar o local host para testes.

const servidor = http.createServer(function teste(request, response) {
  response.writeHead(200, { "Content-Type": "text/html" });
  if (request.url== "/") {
    response.write("<h1>Seja bem vindo. Caso 1</h1>");
  }else if(request.url == '/canal'){
    response.write('<h1>Caso 2.</h1>')
  }else if (request.url == '/canal/curiosidades'){
    response.write('<h1>Caso dentro do caso</h1>')
  }
  response.end();
});

servidor.listen(porta, host, () => {
  console.log("Servidor rodando");
});
