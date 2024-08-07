//Usando express.

const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("CFB Cursos");
});
app.get("/canal", (req, res) => {
  res.json({ canal: "Segundo caso de URL" });
});


app.listen(port || 3000, () => {
  console.log("Servidor rodando");
});


