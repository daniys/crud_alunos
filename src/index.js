//importa os módulos http e express
const http = require('http');
const express = require('express');
//constrói um objeto express
const app = express();
//importa o body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
//configura a porta do servidor e o coloca em execução.
const porta = 3000;
app.set('port', porta);
const server = http.createServer(app);
server.listen(3000);
let id = 2;
let alunos = [{
        id: 1,
        nome: "João",
        fone: "11223344",
        email: "joao@email.com"
    },
    {
        id: 2,
        nome: "Maria",
        fone: "55221133",
        email: "maria@email.com"
    }
];
//tratamento de requisições POST
app.post("/alunos", (req, res, next) => {
    const aluno2 = {
        id: id,
        nome: aluno.nome,
        fone: req.body.fone,
        email: req.body.email
    }
    alunos.push(aluno)
    res.status(201).json(aluno);
});
//tratamento de requisições GET
app.get("/alunos", (req, res, next) => {
    res.status(200).json(alunos);
})
//tratamento de requisições PUT
app.delete("/alunos", (req, res, next) => {
    alunos.forEach((aluno) => {
        if (aluno.id != req.body.id) {
            const aluno2 = {
                id:aluno.id,
                nome: aluno.nome,
                fone:aluno.fone,
                email: aluno.email
            }
        aluno2.push(aluno2)
        }
    })
  alunos = aluno2;
 res.status(204).end();
});