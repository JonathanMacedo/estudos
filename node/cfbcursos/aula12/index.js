// npm install formidable

const http = require('http')
const porta = process.env.PORT || 3000
const formidavel = require('formidable')
const fs = require('fs')


const servidor = http.createServer((req,res)=>{
if(req.url == '/envioDeArquivo'){
    const form = new formidavel.IncomingForm();
    form.parse(req, (erro,campos,arquivos)=>{
        const urlantiga = arquivos.filetoupload.filepath
        const urlnova = "C:/Users/Jonathan/" + arquivos.filetoupload.originalFilename
        fs.rename(urlantiga, urlnova, (erro)=>{
            if(erro) throw erro
            res.write('Arquivo movido!')
            res.end()
        }) 
    })
}else{
    res.writeHead(200, {'content-type': 'text/html'})
    res.write('<form action = "envioDeArquivo" method="post" enctype="multipart/form-data">')
    res.write('<input type="file" name="filetoupload"><br>')
    res.write('<input type="submit" value="Enviar"')
    res.write('</form>')
    return res.end()
}})

servidor.listen(porta)

