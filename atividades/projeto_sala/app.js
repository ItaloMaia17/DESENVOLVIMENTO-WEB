var express = require("express");

const indexRouter = require("./back-end/routes/index")
const alunosRouter = require("./back-end/routes/aluno.route");

var app = express();

app.use(express.json());

app.use("/inicial", indexRouter);
app.use("/alunos", alunosRouter);

app.get("/", (req, res)=>{
  res.send("Pagina inicial")
})
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
});