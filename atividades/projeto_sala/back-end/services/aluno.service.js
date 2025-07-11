const Aluno = require("../models/Aluno.model")
const alunos = require("../data/dados_alunos")

class AlunoService {
    static listar() {
        return alunos;
    }

    static cadastrar({nome, curso, ira}) {
        const id = alunos.length + 1;
        const aluno =  new Aluno(id, nome, curso, parseFloat(ira));
        // inclui o aluno na lista
        alunos.push(aluno);

        return aluno;
    }

    static atualizar(id, {nome, curso, ira}) {
        const index = alunos.findIndex(a => a.id === id);
        if (index !== -1) {
            alunos[index] = new Aluno(id, nome, curso, parseFloat(ira)); // Corrigido para manter instância da classe
            return alunos[index];
        }
        return null;
    }

    static remover(id) {
        const index = alunos.findIndex(a => a.id === id);
        if (index !== -1) {
            const alunoRemovido = alunos.splice(index, 1);
            return alunoRemovido[0]; // Retorna apenas o objeto removido
        }
        return null;
    }
}


module.exports = AlunoService;