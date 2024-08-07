// https://http.cat/ <-- Site muito bom para ver os codigos de retorno.

const http = requere("http");

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("CFB Curos \n Curso de Node.JS");
    response.end();
  })
  .listen(3030);
