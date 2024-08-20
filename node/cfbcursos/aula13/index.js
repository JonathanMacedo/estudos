const mongodb = require("mongodb").MongoClient;
const url = "mongodb+srv://jonathanmacedo:J23092003s@cluster0.tuemy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&authSource=admin";


mongodb.connect(url, (erro, banco) => {
  if (erro) throw erro;
  const dbo = banco.db("jonathanmacedo");
  const obj = { curso: "Curso de Node.js", canal: "CFB Cursos" };
  const colecao = "cursos";
  dbo.collection(colecao).insertOne(obj, (erro, resultado) => {
    if (erro) throw erro;
    console.log("1 novo curso inserido!");
    banco.close();
  });
});
