// Importa o Express
let express = require('express');
let router = express.Router();
const AlunoService = require("../services/aluno.service")

// Rota principal
router.get('/listar', (req, res) => {
  res.json(AlunoService.listar());
});
router.post("/cadastrar", (req, res) => {
  const novoAluno = AlunoService.cadastrar(req.body);

  res.json({ mensagem: "Aluno cadastrado com sucesso", novoAluno });
});

router.put("/atualizar/:id", (req, res) => {
   const alunoAtualizado = AlunoService.atualizar(
            req.params.id,
            req.body
        )
  res.json({ mensagem: "Dados do aluno atualizados", aluno: alunoAtualizado });
});

router.delete("apagar/:id", (req, res) => {
  const alunoRemovido = AlunoService.remover(req.params.id);

  res.json({ mensagem: "Aluno removido", aluno: alunoRemovido });
});


module.exports = router;
